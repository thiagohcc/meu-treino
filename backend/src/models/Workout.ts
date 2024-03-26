import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

import Workoutsheet from './Workoutsheet';
import Exercise from './Exercise';

export default class Workout extends Model<InferAttributes<Workout>, InferCreationAttributes<Workout>> {
  declare id: number;
  declare weight: number;
  declare repetitions: number;
  declare sets: number;
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
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  sets: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'workout',
  underscored: true,
});

Workout.belongsTo(Workoutsheet, {
    foreignKey: 'workoutsheetId',
    as: 'workoutsheet'
  });
  Workout.belongsTo(Exercise, {
    foreignKey: 'exerciseId',
    as: 'exercise'
  })