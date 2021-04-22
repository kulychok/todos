import { Context, Next } from 'koa';

const errorHandler = async (ctx: Context, next: Next): Promise<void> => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.status || 500;
    ctx.response.message = err.message;
  }
};

export default errorHandler;
