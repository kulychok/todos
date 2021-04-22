import { Context } from 'koa';
import { IResponse } from '../types';

const resolve = (
  ctx: Context,
  { status = 200, message = '', body = {} }
): any => {
  ctx.status = status;
  ctx.message = message;
  ctx.body = body;

  return ctx.body;
};

const reject = (ctx: Context, { status = 400, message = '' }): void => {
  ctx.status = status;
  ctx.message = message;
};

const wrongAuthData = (ctx: Context): void => {
  return reject(ctx, {
    status: 400,
    message: 'Wrong email or password',
  });
};

export { resolve, reject, wrongAuthData };
