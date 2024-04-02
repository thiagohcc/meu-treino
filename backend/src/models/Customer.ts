import {Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
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
  declare isActive: boolean;

  public readonly address_id?: Address;
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
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  address_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'address',
      key: 'id'
    }
  },
}, {
  sequelize: db,
  modelName: 'customer',
  tableName: 'customer',
  underscored: true,
  timestamps: false,
});

Customer.hasMany(Workoutsheet, {
  foreignKey: 'customer_id',
  as: 'workoutsheets',
  constraints: false,
});

Customer.hasOne(Address, {
  foreignKey: 'id',
  as: 'address',
  constraints: false,
});
