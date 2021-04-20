import { STATUS } from '../../../../constants/status';
import { resolve } from '../../../../helpers/resolvers';
import db from '../../../../models/index';

const { Todo } = db;

export default async (ctx): Promise<object> => {
  const { id } = ctx.params;

  const todo = await Todo.findOne({
    where: { UserId: ctx.userId, id },
  });

  if (todo) {
    todo.update({
      status: STATUS.DELETED,
      updatedAt: new Date().toISOString(),
    });

    return resolve(ctx, { status: 200 });
  }
  return resolve(ctx, { status: 400, message: 'Todo not found' });
};
