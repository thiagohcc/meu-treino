import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

import Address from './Address';

export default class GymUnit extends Model<InferAttributes<GymUnit>, InferCreationAttributes<GymUnit>> {
  declare id?: number;
  declare name: string;
  declare phone: string;
  declare email: string;
  declare open_hour: Date;
  declare close_hour: Date;

  public address_id?: number;
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
    references: {
      model: 'address',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  modelName: 'gym_unit',
  underscored: true,
  tableName: 'gym_unit',
  timestamps: false,
});

GymUnit.belongsTo(Address, {
  foreignKey: 'address_id',
  as: 'address',
});

