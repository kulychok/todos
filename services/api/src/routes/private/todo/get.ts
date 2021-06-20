import db from '../../../models/index';
import { Op } from 'sequelize';
import { resolve } from '../../../helpers/resolvers';
import { PAGE_LIMIT } from '../../../constants/pageLimit';
import STATUS from '../../../constants/todo';
import getCount from '../../../middleware/getCount';
import { Context } from 'koa';
import { IGetTodoListBody, Response } from '../../../types';

const { Todo } = db;
const { not } = Op;

export = async (ctx: Context): Response<IGetTodoListBody> => {
  const { page = 0 } = ctx.query;

  const limit = PAGE_LIMIT;
  const offset = +page * limit;

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
