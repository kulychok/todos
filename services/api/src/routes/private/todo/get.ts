import db from '../../../models/index';
import { Op } from 'sequelize';
import { resolve } from '../../../helpers/resolvers';
import { PAGE_LIMIT } from '../../../constants/pageLimit';
import { STATUS } from '../../../constants/status';
import getCount from '../../../middleware/getCount';

const { Todo } = db;
const { not } = Op;

export = async (ctx): Promise<object> => {
  const { page = 0 } = ctx.query;

  const limit = PAGE_LIMIT;
  const offset = page * limit;

  const todoList = await Todo.findAll({
    limit,
    offset,
    where: { UserId: ctx.userId, [not]: { status: STATUS.DELETED } },
    order: [['id', 'ASC']],
  });

  const count = await getCount(ctx);

  return resolve(ctx, {
    status: 200,
    body: { count, todoList, limit: PAGE_LIMIT },
  });
};
