import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

import Customer from './Customer';
import GymUnit from './GymUnit';

export default class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
  declare id: number;
  declare street: string;
  declare number: number;
  declare neighborhood: string;
  declare city: string;
  declare state: string;
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
  zip_code: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'address',
  underscored: true,
});

Address.belongsTo(Customer, {
  foreignKey: 'customerId',
  as: 'customer',
  constraints: false,
  scope: {
    addressableType: 'customer',
  }
});

Address.belongsTo(GymUnit, {
  foreignKey: 'gymUnitId',
  as: 'gymUnit',
  constraints: false,
  scope: {
    addressableType: 'gymUnit',
  }
});
