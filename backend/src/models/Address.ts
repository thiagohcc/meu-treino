import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

import Customer from './Customer';
import GymUnit from './GymUnit';

export default class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
  declare id?: number;
  declare street: string;
  declare number: number;
  declare complement: string;
  declare neighborhood: string;
  declare city: string;
  declare state: string;
  declare country: string;
  declare zip_code: number;
}

Address.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  complement: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'address',
  tableName: 'address',
  underscored: true,
  timestamps: false,
});


