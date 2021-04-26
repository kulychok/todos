import { reject } from '../helpers/resolvers';
import { verifyJWT } from '../helpers/jwtHandlers';
import { Context, Next } from 'koa';

const checkAuthorization = async (ctx: Context, next: Next): Promise<void> => {
  try {
    const authorization = ctx.cookies.get('accessToken');

    ctx.userId = verifyJWT(authorization).userId;

    await next();
  } catch (err) {
    return reject(ctx, { status: 401 });
  }
};
export default checkAuthorization;
