import { STATUS } from '../../../../constants/status';
import { Op } from 'sequelize';
import { reject, resolve } from '../../../../helpers/resolvers';
import db from '../../../../models/index';

const { Todo } = db;
const { not } = Op;

export default async (ctx): Promise<any> => {
  const { id } = ctx.params;

  const todo = await Todo.findOne({
    where: { UserId: ctx.userId, id, [not]: { status: STATUS.DELETED } },
  });

  if (todo) {
    await todo.update({
      status: STATUS.DELETED,
      updatedAt: new Date().toISOString(),
    });

    return resolve(ctx, { status: 200 });
  }
  reject(ctx, { status: 400, message: 'Todo not found' });
};
