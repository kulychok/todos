import { Context } from 'koa';
import { STATUS } from '../../../constants/status';
import { resolve } from '../../../helpers/resolvers';
import db from '../../../models/index';

const { Todo } = db;

export = async (ctx: Context): Promise<void> => {
  let { title, status } = await ctx.request.body;

  if (!status) status = STATUS.ACTIVE;

  await Todo.create({
    title,
    status,
    UserId: ctx.userId,
  });

  return resolve(ctx, { status: 200 });
};
