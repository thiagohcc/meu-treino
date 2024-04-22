import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import Workoutsheet from "../models/Workoutsheet";
import Workout from "../models/Workout";
import IWorkoutsheet from '../interfaces/IWorkoutsheet';
import Exercise from '../models/Exercise';
import Customer from '../models/Customer';

@injectable()
export default class workoutsheetService {
  public getAll = async () => {
    try {
      const allWorkoutsheets = await Workoutsheet.findAll();
      return { type: 200, message: allWorkoutsheets };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getById = async (id: number) => {
    try {
      const workoutsheet = await Workoutsheet.findByPk(id, { include: [{ all: true, nested: true }]});

      if(!workoutsheet) {
        return { type: 404, message: 'workoutsheet not found.' }
      }

      return { type: 200, message: workoutsheet };
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  };

  public getByCustomerId = async (id: number) => {
    try {

      const userExists = await Customer.findOne({ where: { id } });

      if (!userExists) {
        return { type: 404, message: 'User not exists.' }
      };

      const workoutsheets = await Workoutsheet.findAll(
        {
          where: { customer_id: id },
          include: [
            {
              model: Workout,
              as: 'workouts',
              include:
                [
                  {
                    model: Exercise,
                    through: { attributes: []}
                  }
                ]
              }
            ]
        }
      );

      return { type: 200, message: workoutsheets }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  };

  public post = async (workoutsheet: IWorkoutsheet) => {
    try {
      const newWorkoutsheet = await Workoutsheet.create(workoutsheet);
      return { type: 201, message: newWorkoutsheet };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, workoutsheet: IWorkoutsheet) => {
    try {
      const updatedWorkoutsheet = await Workoutsheet.findByPk(id, { include: [{ model: Workout, as: 'workouts', include: [{ model: Exercise, through: { attributes: [] }}] }] });

      if (!updatedWorkoutsheet) {
        return { type: 404, message: 'workoutsheet not found.' }
      }

      const workoutsheetUpdated = await Workoutsheet.update(workoutsheet, { where: { id } });

      return { type: 200, message: workoutsheetUpdated }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  };

  public delete = async (id: number) => {
    try {
      const workoutsheet = await Workoutsheet.findByPk(id);

      if (!workoutsheet) {
        return { type: 404, message: 'Workoutsheet not found.' };
      }

      await Workoutsheet.destroy({ where: { id } });

      return { type: 200, message: 'Workoutsheet deleted.' }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  };

  public patch = async (id: number, updates: Partial<Workoutsheet>) => {
    try {
      const workoutsheet = await Workoutsheet.findByPk(id);

      if (!workoutsheet) {
        return { type: 404, message: 'Workoutsheet not found' }
      }

      const workoutsheetUpdated = await Workoutsheet.update(updates, { where: { id } });
      return { type: 200, message: workoutsheetUpdated }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  };

};
