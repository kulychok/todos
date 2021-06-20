import db from '../models/index';

const { User } = db;

const ban = async (id: number) => {
  await User.update({ revoked: true }, { where: { id } });
};
