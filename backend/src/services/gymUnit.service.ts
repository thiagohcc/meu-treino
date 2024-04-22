import 'reflect-metadata';

import GymUnit from "../models/GymUnit";
import IGymUnit from '../interfaces/IGymUnit';
import Address from '../models/Address';
import IAddress from '../interfaces/IAddress';

import { injectable } from "tsyringe";

@injectable()
export default class GymUnitService {
  public getAll = async () => {
    try {
      const allGymUnits = await GymUnit.findAll({ include: [{ all: true, nested: true }] });
      return { type: 200, message: allGymUnits };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getById = async (id: number) => {
    try {
      const gymUnit = await GymUnit.findByPk(id, { include: [{ all: true, nested: true }] });

      if (!gymUnit) {
        return { type: 404, message: "Gym unit not found." };
      }
      return { type: 200, message: gymUnit };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public post = async (gymUnit: IGymUnit, address?: IAddress) => {
    try {
      if (!address) {
        const newGymUnit = await GymUnit.create(gymUnit);
        return { type: 201, message: newGymUnit };
      } else {
        const newAddress = await Address.create(address);
        const newGymUnitData = { ...gymUnit, address_id: Number(newAddress.id) };
        const newGymUnit = await GymUnit.create(newGymUnitData);

        const gymUnitWithAddress = await GymUnit.findByPk(newGymUnit.id, { include: [{ all: true, nested: true }] });
        return { type: 201, message: gymUnitWithAddress };
      }
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, gymUnit: IGymUnit) => {
    try {
      const gymUnitExists = await GymUnit.findOne({ where: { id } });
     
      if (!gymUnitExists) {
        return { type: 404, message: "Gym unit not found." };
      }

      await GymUnit.update(gymUnit, { where: { id } } );
      const updatedGymUnit = await GymUnit.findByPk(id, { include: [{ all: true, nested: true }] });

      return { type: 200, message: updatedGymUnit };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public delete = async (id: number) => {
    try {
      const gymUnitExists = await GymUnit.findByPk(id);
      
      if (!gymUnitExists) {
        return { type: 404, message: "Gym unit not found." };
      }

      await GymUnit.destroy({ where: { id } });
      return { type: 200, message: "Gym unit deleted." };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public patch = async (id: number, updates: Partial<GymUnit>) => {
    try {
      const gymUnit = await GymUnit.findOne({where: { id }});

      if (!gymUnit) {
        return { type: 404, message: "Gym unit not found." };
      }

      await GymUnit.update(updates, { where: { id } });
      const updatedGymUnit = await GymUnit.findByPk(id, { include: [{ all: true, nested: true }] });
      
      return { type: 200, message: updatedGymUnit };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

};