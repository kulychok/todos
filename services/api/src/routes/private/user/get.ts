import db from '../../../models/index';
import { resolve } from '../../../helpers/resolvers';

const { User } = db;

export = async (ctx) => {
  const user = await User.findOne({
    where: { id: ctx.userId },
  });

  if (user) {
    return resolve(ctx, { status: 200, body: User.format(user) });
  }
  return resolve(ctx, { status: 400 });
};
