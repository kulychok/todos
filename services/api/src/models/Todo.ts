'use strict';

import { Model } from 'sequelize';

export = (sequelize, DataTypes) => {
  class Todo extends Model {
    public id!: number;
    public title: string;
    public status: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    static associate(models: any): any {
      Todo.belongsTo(models.User);
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Todo',
      tableName: 'Todo',
    }
  );

  return Todo;
};
