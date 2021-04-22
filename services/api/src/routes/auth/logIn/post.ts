import bcrypt = require('bcrypt');
import db from '../../../models';
import { generateAccessToken } from '../../../helpers/jwtHandlers';
import { resolve, wrongAuthData } from '../../../helpers/resolvers';
import { Context } from 'koa';
import { IFormatUser } from '../../../types';

const { User, RefreshToken } = db;

interface ILogInBody {
  user: IFormatUser;
}

export = async (ctx: Context): Promise<ILogInBody> => {
  const { email, password } = ctx.request.body;

  let user: typeof User = await User.findOne({ where: { email } });

  if (!user) {
    wrongAuthData(ctx);
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    wrongAuthData(ctx);
    return;
  }

  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = await bcrypt.hash(process.env.BCRYPT_SECRET, 12);

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
