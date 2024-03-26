import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

import Customer from './Customer';

export default class Workoutsheet extends Model<InferAttributes<Workoutsheet>, InferCreationAttributes<Workoutsheet>> {
  declare id: number;
  declare costumer_id: number;
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
  costumer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Costumer',
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
  underscored: true,
});

Workoutsheet.belongsTo(Customer, {
  foreignKey: 'customerId',
  as: 'customer'
})