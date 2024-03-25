import {Model, DataTypes, InferAttributes, InferCreationAttributes} from 'sequelize';
import db from '.';

export default class Costumer extends Model<InferAttributes<Costumer>, InferCreationAttributes<Costumer>> {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare gender: string;
  declare phone: number;
  declare cpf: number;
  declare isActive: boolean;
}

Costumer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
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
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: true,
  },
  cpf: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  sequelize: db,
  modelName: 'costumers',
  underscored: true,
});