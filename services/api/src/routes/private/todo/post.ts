import { Context } from 'koa';
import STATUS from '../../../constants/todo';
import { resolve } from '../../../helpers/resolvers';
import db from '../../../models/index';
import { Response } from '../../../types';

const { Todo } = db;

export = async (ctx: Context): Response<void> => {
  let { title, status } = await ctx.request.body;

  if (!status) status = STATUS.ACTIVE;

  await Todo.create({
    title,
    status,
    UserId: ctx.userId,
  });

  return resolve(ctx, { status: 200 });
};
