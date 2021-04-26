import db from '../../../models/index';
import { reject, resolve } from '../../../helpers/resolvers';
import { Context } from 'koa';
import { IFormatUser, Response } from '../../../types';

const { User } = db;

export = async (ctx: Context): Response<IFormatUser> => {
  const user = await User.findOne({
    where: { id: ctx.userId },
  });

  if (user) {
    return resolve(ctx, { status: 200, body: User.format(user) });
  }
  reject(ctx, { status: 400 });
};
