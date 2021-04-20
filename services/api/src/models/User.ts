'use strict';

import { Model } from 'sequelize';

export = (sequelize, DataTypes) => {
  class User extends Model {
    public id!: number;
    public email: string;
    public password: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models) {
      User.hasMany(models.Todo);
      User.hasOne(models.RefreshToken);
    }

    static format(user) {
      return {
        email: user.email,
        id: user.id,
      };
    }
  }

  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'User',
    }
  );

  return User;
};
