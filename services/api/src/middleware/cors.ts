import { Context, Next } from 'koa';

const corsRules = async (ctx: Context, next: Next): Promise<void> => {
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');

  ctx.set('Access-Control-Allow-Credentials', 'true');

  ctx.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Set-Cookie, Cookie'
  );

  ctx.set(
    'Access-Control-Request-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Set-Cookie, Cookie'
  );

  ctx.set(
    'Access-Control-Allow-Methods',
    'POST, GET, PUT, DELETE, OPTIONS, PATCH'
  );

  if (ctx.method === 'OPTIONS') {
    ctx.status = 200;
  } else {
    await next();
  }
};

export default corsRules;
