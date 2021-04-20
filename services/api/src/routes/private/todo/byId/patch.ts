import { STATUS } from '../../../../constants/status';
import { resolve } from '../../../../helpers/resolvers';
import db from '../../../../models/index';

const { Todo } = db;

export default async (ctx): Promise<object> => {
  const { id } = ctx.params;
  const { title } = ctx.request.body;

  const todo = await Todo.findOne({
    where: { UserId: ctx.userId, id },
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
  return resolve(ctx, { status: 400, message: 'Todo not found' });
};
