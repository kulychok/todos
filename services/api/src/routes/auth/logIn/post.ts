import bcrypt = require('bcrypt');
import db from '../../../models';
import { generateAccessToken } from '../../../helpers/jwtHandlers';
import { resolve, wrongAuthData } from '../../../helpers/resolvers';
import { Context } from 'koa';
import { IFormatUser } from '../../../types';
import config from '../../../config';
import { Response } from '../../../types';

const { User, RefreshToken } = db;

interface ILogInBody {
  user: IFormatUser;
}

export = async (ctx: Context): Response<ILogInBody> => {
  const { email, password } = ctx.request.body;

  let user: typeof User = await User.findOne({ where: { email } });

  if (!user) {
    return wrongAuthData(ctx);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return wrongAuthData(ctx);
  }

  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = await bcrypt.hash(config.bcryptSecret, 12);

  await RefreshToken.update({ refreshToken }, { where: { UserId: user.id } });

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
