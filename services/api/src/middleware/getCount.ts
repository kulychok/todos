import db from '../models/index';
import { Op } from 'sequelize';
import { STATUS } from '../constants/status';

const { Todo } = db;
const { not } = Op;

interface Count {
  all: number;
  active: number;
  completed: number;
}

const getCount = async (ctx: any): Promise<Count> => {
  const all = await Todo.count({
    where: { UserId: ctx.userId, [not]: { status: STATUS.DELETED } },
  });

  const active = await Todo.count({
    where: { UserId: ctx.userId, status: STATUS.ACTIVE },
  });

  const completed = await Todo.count({
    where: { UserId: ctx.userId, status: STATUS.COMPLETED },
  });

  return { all, active, completed };
};

export default getCount;
