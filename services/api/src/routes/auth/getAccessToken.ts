import { Context, Next } from 'koa';
import db from '../../models';
import bcrypt = require('bcrypt');
import { generateAccessToken } from '../../helpers/jwtHandlers';
import { resolve } from '../../helpers/resolvers';

const { RefreshToken } = db;

interface Body {
  refreshToken;
}

export = async (ctx: Context) => {
  const { refreshToken } = ctx.request.body;

  const token = await RefreshToken.findOne({
    where: { refreshToken },
  });

  const newRefreshToken = await bcrypt.hash(process.env.BCRYPT_SECRET, 12);

  await token.update({
    refreshToken: newRefreshToken,
    updatedAt: new Date().toISOString(),
  });

  const accessToken = generateAccessToken({ userId: token.UserId });

  ctx.cookies.set('accessToken', accessToken, {
    httpOnly: false,
    secure: false,
  });
  ctx.cookies.set('refreshToken', newRefreshToken, {
    httpOnly: false,
    secure: false,
  });

  resolve(ctx, { status: 200 });
};
