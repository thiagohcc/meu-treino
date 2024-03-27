import {Model, DataTypes, InferAttributes, InferCreationAttributes, HasOne, HasOneGetAssociationMixin} from 'sequelize';
import db from '.';

import Address from './Address';

export default class GymUnit extends Model<InferAttributes<GymUnit>, InferCreationAttributes<GymUnit>> {
  declare id?: number;
  declare name: string;
  declare phone: string;
  declare email: string;
  declare open_hour: Date;
  declare close_hour: Date;

  public readonly address_id?: Address;

  // public getAddress!: HasOneGetAssociationMixin<Address>;
}

GymUnit.init({
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
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  open_hour: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  close_hour: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'gym_unit',
  underscored: true,
});

GymUnit.hasOne(Address, {
  foreignKey: {
    name: 'addressableId',
    allowNull: false,
  },
  constraints: false,
  scope: {
    addressableType: 'gymUnit',
  }
});

