import db from '../../../models/index';
import { Op } from 'sequelize';
import { resolve } from '../../../helpers/resolvers';
import STATUS from '../../../constants/todo';
import { Context } from 'koa';
import { Response } from '../../../types';

const { Todo } = db;

export = async (ctx: Context): Response<void> => {
  await Todo.update(
    { status: STATUS.DELETED },
    { where: { UserId: ctx.userId, status: STATUS.COMPLETED } }
  );

  return resolve(ctx, {
    status: 200,
  });
};
