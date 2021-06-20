'use strict';

import { Model } from 'sequelize';

export = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    public id!: number;
    public refreshToken: string;
    public UserId: number;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    static associate(models) {
      RefreshToken.belongsTo(models.User);
    }
  }
  RefreshToken.init(
    {
      refreshToken: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'RefreshToken',
      tableName: 'RefreshToken',
    }
  );
  return RefreshToken;
};
