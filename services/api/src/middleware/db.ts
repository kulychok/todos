import db from '../models';

const { sequelize } = db;

export default async (): Promise<void> => {
  try {
    await sequelize.authenticate();

    console.log('Connection to DB has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
