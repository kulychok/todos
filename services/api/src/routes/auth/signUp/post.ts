import db from '../../../models/';
import bcrypt = require('bcrypt');
import { generateAccessToken } from '../../../helpers/jwtHandlers';
import { resolve, wrongAuthData } from '../../../helpers/resolvers';
import { isValidEmail, isValidPassword } from '../../../helpers/validators';

const { User, RefreshToken } = db;

export = async (ctx): Promise<object> => {
  const { email, password } = ctx.request.body;
  if (!email || !password) {
    return wrongAuthData(ctx);
  }

  if (!isValidEmail(email)) {
    return wrongAuthData(ctx);
  }
  const isAlreadySigned = await User.findOne({ where: { email } });
  if (isAlreadySigned) {
    return resolve(ctx, {
      message: 'This email already signed up',
    });
  }

  if (!isValidPassword(password)) {
    return wrongAuthData(ctx);
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const refreshToken = await bcrypt.hash(process.env.BCRYPT_SECRET, 12);

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
