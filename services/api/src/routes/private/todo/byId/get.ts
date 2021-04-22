import { Context } from 'koa';
import { Op } from 'sequelize';
import { STATUS } from '../../../../constants/status';
import { reject, resolve } from '../../../../helpers/resolvers';
import db from '../../../../models';
import { ITodo } from '../../../../types';

const { Todo } = db;
const { not } = Op;

export default async (ctx: Context): Promise<ITodo> => {
  const { id } = ctx.params;

  const { dataValues: todo } = await Todo.findOne({
    where: { UserId: ctx.userId, id, [not]: { status: STATUS.DELETED } },
  });

  if (todo) {
    return resolve(ctx, { body: todo });
  }

  reject(ctx, { status: 400, message: 'Todo not found' });
};
