import db from '../../../models/index';
import { Op } from 'sequelize';
import { resolve } from '../../../helpers/resolvers';
import STATUS from '../../../constants/todo';
import { Context } from 'koa';
import { Response } from '../../../types';

const { Todo } = db;
const { not } = Op;

export = async (ctx: Context): Response<void> => {
  await Todo.update(
    { status: STATUS.ACTIVE },
    { where: { UserId: ctx.userId, [not]: { status: STATUS.DELETED } } }
  );

  return resolve(ctx, {
    status: 200,
  });
};
