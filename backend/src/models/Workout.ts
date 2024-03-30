import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

import Workoutsheet from './Workoutsheet';

export default class Workout extends Model<InferAttributes<Workout>, InferCreationAttributes<Workout>> {
  declare id?: number;
  declare weight: number;
  declare repetitions: number;
  declare sets: number;

  public readonly workoutsheet_id?: Workoutsheet;
} 

Workout.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  repetitions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  workoutsheet_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'workoutsheet',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  modelName: 'workout',
  underscored: true,
});
