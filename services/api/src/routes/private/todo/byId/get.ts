import { Op } from 'sequelize';
import { STATUS } from '../../../../constants/status';
import { resolve } from '../../../../helpers/resolvers';
import db from '../../../../models';

const { Todo } = db;
const { not } = Op;

export default async (ctx): Promise<object> => {
  const { id } = ctx.params;

  const { dataValues: todo } = await Todo.findOne({
    where: { UserId: ctx.userId, id, [not]: { status: STATUS.DELETED } },
  });

  if (todo) {
    return resolve(ctx, { body: todo });
  }

  return resolve(ctx, { status: 400, message: 'Todo not found' });
};
