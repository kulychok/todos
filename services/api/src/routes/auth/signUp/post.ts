import db from '../../../models/';
import bcrypt = require('bcrypt');
import { generateAccessToken } from '../../../helpers/jwtHandlers';
import { reject, resolve, wrongAuthData } from '../../../helpers/resolvers';
import { isValidEmail, isValidPassword } from '../../../helpers/validators';
import { Context } from 'koa';
import { IFormatUser, IResponse, Response } from '../../../types';
import config from '../../../config';

const { User, RefreshToken } = db;

interface ISignUpBody {
  user: IFormatUser;
}

export = async (ctx: Context): Response<ISignUpBody> => {
  const { email, password } = ctx.request.body;
  if (!email || !password) {
    wrongAuthData(ctx);
    return;
  }

  if (!isValidEmail(email)) {
    wrongAuthData(ctx);
    return;
  }
  const isAlreadySigned = await User.findOne({ where: { email } });
  if (isAlreadySigned) {
    reject(ctx, {
      message: 'This email already signed up',
    });
    return;
  }

  if (!isValidPassword(password)) {
    wrongAuthData(ctx);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const refreshToken = await bcrypt.hash(config.bcryptSecret, 12);

  const hashedRefreshToken = refreshToken;

  const user = await User.create({
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  await RefreshToken.create({
    UserId: user.id,
    refreshToken: hashedRefreshToken,
  });

  const accessToken = generateAccessToken({ userId: user.id });

  ctx.cookies.set('accessToken', accessToken, {
    httpOnly: false,
    secure: false,
  });

  ctx.cookies.set('refreshToken', refreshToken, {
    httpOnly: false,
    secure: false,
  });

  return resolve(ctx, {
    status: 200,
    body: { user: User.format(user) },
  });
};
