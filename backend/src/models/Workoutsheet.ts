import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

import Costomer from './Costumer';

export default class Workoutsheet extends Model<InferAttributes<Workoutsheet>, InferCreationAttributes<Workoutsheet>> {
  declare id: number;
  declare idCostumer: number;
  declare title: string;
  declare description: string;
  declare isActive: boolean;
}

Workoutsheet.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idCostumer: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Customer',
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
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  sequelize: db,
  modelName: 'workoutsheet',
  underscored: true,
});

Workoutsheet.belongsTo(Costomer, {
  foreignKey: 'costumer',
  as: 'costumer'
})