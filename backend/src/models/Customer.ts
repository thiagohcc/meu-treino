import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

import Workoutsheet from './Workoutsheet';
import Address from './Address';

export default class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>> {
  declare id?: number;
  declare first_name: string;
  declare last_name: string;
  declare email: string;
  declare gender: string;
  declare phone: string;
  declare cpf: string;
  declare is_active: boolean;
}

Customer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  sequelize: db,
  modelName: 'customer',
  underscored: true,
});

Customer.hasMany(Workoutsheet, {
  foreignKey: 'customerId',
  as: 'workoutsheets'
});

Customer.hasOne(Address, {
  foreignKey: 'addressableId',
  constraints: false,
  scope: {
    addressableType: 'customer',
  },
});