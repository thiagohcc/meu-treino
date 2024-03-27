import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

import Workout from './Workout';

export default class Exercise extends Model<InferAttributes<Exercise>, InferCreationAttributes<Exercise>> {
  declare id?: number;
  declare name: string;
  declare number: number;
  declare photoUrl: string;
  declare videoUrl: string;
}

Exercise.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'exercise',
  underscored: true,
});

Exercise.hasMany(Workout, {
  foreignKey: 'exerciseId',
  as: 'workouts'
});
