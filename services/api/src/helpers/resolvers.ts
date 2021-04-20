import { Response } from '../types';

const resolve = (
  ctx: any,
  { status = 200, message = '', body = null }
): Response => {
  ctx.status = status;
  ctx.message = message;
  ctx.body = body;

  return ctx.body;
};

const reject = (ctx: any, { status = 400, message = '' }): void => {
  ctx.status = status;
  ctx.message = message;
};

const wrongAuthData = (ctx: any): any => {
  return reject(ctx, {
    status: 400,
    message: 'Wrong email or password',
  });
};

export { resolve, reject, wrongAuthData };
