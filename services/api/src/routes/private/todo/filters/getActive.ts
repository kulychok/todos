import db from '../../../../models/index';
import { resolve } from '../../../../helpers/resolvers';
import { PAGE_LIMIT } from '../../../../constants/pageLimit';
import STATUS from '../../../../constants/todo';
import getCount from '../../../../middleware/getCount';
import { Context } from 'koa';
import { IGetTodoListBody, Response } from '../../../../types';

const { Todo } = db;

export = async (ctx: Context): Response<IGetTodoListBody> => {
  const { page = 0 } = ctx.query;

  const limit = PAGE_LIMIT;
  const offset = +page * limit;

  const todoList = await Todo.findAll({
    limit,
    offset,
    where: { UserId: ctx.userId, status: STATUS.ACTIVE },
    order: [['id', 'ASC']],
  });

  const count = await getCount(ctx);

  return resolve(ctx, {
    status: 200,
    body: { count, todoList, limit: PAGE_LIMIT },
  });
};
