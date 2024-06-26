import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

import Customer from './Customer';
import Workout from './Workout';

export default class Workoutsheet extends Model<InferAttributes<Workoutsheet>, InferCreationAttributes<Workoutsheet>> {
  declare id?: number;
  declare customer_id: number;
  declare title: string;
  declare description: string;
  declare is_active: boolean;
}

Workoutsheet.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'customer',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  sequelize: db,
  modelName: 'workoutsheet',
  tableName: 'workoutsheet',
  underscored: true,
  timestamps: false,
});

Workoutsheet.hasMany(Workout, {
  foreignKey: 'workoutsheet_id',
  as: 'workouts',
  constraints: false,
});
