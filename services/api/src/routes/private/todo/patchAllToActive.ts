import db from '../../../models/index';
import { Op } from 'sequelize';
import { resolve } from '../../../helpers/resolvers';
import { STATUS } from '../../../constants/status';
import { Context } from 'koa';

const { Todo } = db;
const { not } = Op;

export = async (ctx: Context): Promise<void> => {
  await Todo.update(
    { status: STATUS.ACTIVE },
    { where: { UserId: ctx.userId, [not]: { status: STATUS.DELETED } } }
  );

  return resolve(ctx, {
    status: 200,
  });
};
