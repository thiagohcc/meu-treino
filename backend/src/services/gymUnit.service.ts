import GymUnit from "../models/GymUnit";

export default class GymUnitService {
  public getAll = async () => {
    try {
      const allGymUnits = await GymUnit.findAll();
      return { type: 200, message: allGymUnits };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getById = async (id: number) => {
    try {
      const gymUnit = await GymUnit.findByPk(id);

      if (!gymUnit) {
        return { type: 404, message: "Gym unit not found." };
      }
      return { type: 200, message: gymUnit };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public post = async (gymUnit: GymUnit) => {
    try {
      const newGymUnit = await GymUnit.create(gymUnit);
      return { type: 201, message: newGymUnit };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, gymUnit: GymUnit) => {
    try {
      const gymUnitExists = await GymUnit.findByPk(id);
     
      if (!gymUnitExists) {
        return { type: 404, message: "Gym unit not found." };
      }

      const updatedGymUnit = await GymUnit.update(gymUnit, { where: { id } });
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
      const gymUnit = await GymUnit.findByPk(id);

      if (!gymUnit) {
        return { type: 404, message: "Gym unit not found." };
      }

      await gymUnit.update(updates);
      return { type: 200, message: gymUnit };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

};