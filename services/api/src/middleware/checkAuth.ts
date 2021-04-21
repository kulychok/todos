import { reject } from '../helpers/resolvers';
import { verifyJWT } from '../helpers/jwtHandlers';

const checkAuthorization = async (ctx: any, next: any) => {
  try {
    const authorization = ctx.cookies.get('accessToken');
    if (!authorization) {
      return reject(ctx, { status: 401 });
    }

    const token = authorization;
    ctx.userId = verifyJWT(token).userId;

    await next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return reject(ctx, { status: 401 });
    }
  }
};
export default checkAuthorization;
