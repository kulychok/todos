import { STATUS } from '../../../../constants/status';
import { reject, resolve } from '../../../../helpers/resolvers';
import { Op } from 'sequelize';
import db from '../../../../models/index';

const { Todo } = db;
const { not } = Op;

export default async (ctx): Promise<object> => {
  const { id } = ctx.params;
  const { title } = ctx.request.body;

  const todo = await Todo.findOne({
    where: { UserId: ctx.userId, id, [not]: { status: STATUS.DELETED } },
  });

  if (todo) {
    if (title) {
      await todo.update({ title, updatedAt: new Date().toISOString() });
      return resolve(ctx, { status: 200 });
    }
    let status =
      todo.status === STATUS.ACTIVE ? STATUS.COMPLETED : STATUS.ACTIVE;
    await todo.update({ status, updatedAt: new Date().toISOString() });

    return resolve(ctx, { status: 200 });
  }
  reject(ctx, { status: 400, message: 'Todo not found' });
};
