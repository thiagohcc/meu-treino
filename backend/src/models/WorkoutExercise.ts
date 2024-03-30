import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

import Workoutsheet from './Workoutsheet';
import Workout from './Workout';
import Exercise from './Exercise';

export default class WorkoutExercise extends Model<InferAttributes<WorkoutExercise>, InferCreationAttributes<WorkoutExercise>> {
  declare id?: number;
  declare workoutId: number;
  declare exerciseId: number;

  public readonly workoutsheet_id?: Workoutsheet;
} 

WorkoutExercise.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  workoutId: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  exerciseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'workout',
  underscored: true,
});

Workout.belongsToMany(Exercise, { through: WorkoutExercise, foreignKey: 'workoutId' });
Exercise.belongsToMany(Workout, { through: WorkoutExercise, foreignKey: 'exerciseId' });

WorkoutExercise.belongsTo(Workout, { foreignKey: 'workoutId' });
WorkoutExercise.belongsTo(Exercise, { foreignKey: 'exerciseId' });

