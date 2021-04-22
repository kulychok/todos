import { STATUS } from '../../../../constants/status';
import { Op } from 'sequelize';
import { reject, resolve } from '../../../../helpers/resolvers';
import db from '../../../../models/index';
import { Context } from 'koa';

const { Todo } = db;
const { not } = Op;

export default async (ctx: Context): Promise<void> => {
  const { id } = ctx.params;

  const todo = await Todo.findOne({
    where: { UserId: ctx.userId, id, [not]: { status: STATUS.DELETED } },
  });

  if (todo) {
    await todo.update({
      status: STATUS.DELETED,
      updatedAt: new Date().toISOString(),
    });

    resolve(ctx, { status: 200 });
    return;
  }
  reject(ctx, { status: 400, message: 'Todo not found' });
};
