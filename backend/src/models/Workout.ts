import {Model, DataTypes, InferAttributes, InferCreationAttributes, Association} from 'sequelize';
import db from '.';

import Workoutsheet from './Workoutsheet';
import Exercise from './Exercise';

export default class Workout extends Model<InferAttributes<Workout>, InferCreationAttributes<Workout>> {
  declare id?: number;
  declare weight: number;
  declare repetitions: number;
  declare sets: number;

  public readonly workoutsheet_id?: Workoutsheet;

  public static associations: {
    workoutsheet: Association<Workout, Workoutsheet>;
  };
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
}, {
  sequelize: db,
  modelName: 'workout',
  underscored: true,
});

Workout

// Workout.belongsTo(Workoutsheet, {
//     foreignKey: 'workoutsheet_id',
//     as: 'workout_sheet'
//   });

// Workout.belongsTo(Exercise, {
//   foreignKey: 'exerciseId',
//   as: 'exercise'
// });