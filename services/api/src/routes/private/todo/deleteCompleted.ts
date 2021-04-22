import db from '../../../models/index';
import { Op } from 'sequelize';
import { resolve } from '../../../helpers/resolvers';
import { STATUS } from '../../../constants/status';
import { Context } from 'koa';

const { Todo } = db;

export = async (ctx: Context): Promise<void> => {
  await Todo.update(
    { status: STATUS.DELETED },
    { where: { UserId: ctx.userId, status: STATUS.COMPLETED } }
  );

  return resolve(ctx, {
    status: 200,
  });
};
