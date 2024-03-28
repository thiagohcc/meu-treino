import {Model, DataTypes, InferAttributes, InferCreationAttributes, Association} from 'sequelize';
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

  public readonly address_id?: Address;

  public static associations: {
    address: Association<Customer, Address>;
    workoutsheets: Association<Customer, Workoutsheet>;
  };
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
  // address_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
}, {
  sequelize: db,
  modelName: 'customer',
  underscored: true,
});

Customer.hasMany(Workoutsheet, {
  foreignKey: 'customerId',
  as: 'workoutsheets',
  constraints: false,
});

Customer.belongsTo(Address, {
  foreignKey: 'address_id',
  as: 'address',
  constraints: false,
});

