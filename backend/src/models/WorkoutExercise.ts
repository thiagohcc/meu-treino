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
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'workout',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  exerciseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'exercise',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  sequelize: db,
  modelName: 'workout_exercises',
  tableName: 'workout_exercise',
  underscored: true,
  timestamps: false,
});

// Workout.belongsToMany(Exercise, { through: WorkoutExercise, foreignKey: 'workout_id' });
// Exercise.belongsToMany(Workout, { through: WorkoutExercise, foreignKey: 'exercise_id' });

// WorkoutExercise.belongsTo(Workout, { foreignKey: 'workout_id' });
// WorkoutExercise.belongsTo(Exercise, { foreignKey: 'exercise_id' });

