import Exercise from "../models/Exercise"
import IExercise from "../interfaces/IExercise";

import { injectable } from "tsyringe";
import e = require("express");

@injectable()
export default class ExerciseService {
  public getAll = async () => {
    try {
      const allExercises = await Exercise.findAll();

      return { type: 200, message: allExercises };
    } catch (err) {     
      return { type: 500, message: (err as Error).message };
    }
  }

  public getById = async (id: number) => {
    try {
      const exercise = await Exercise.findByPk(id);

      if (!exercise) {
        return { type: 404, message: "Exercise not found." };
      }

      return { type: 200, message: exercise };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getByName = async (name: string) => {
    try {
      const exercise = await Exercise.findOne({ where: { name } });

      if (!exercise) {
        return { type: 404, message: "Exercise not found." };
      }

      return { type: 200, message: exercise };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public post = async (exercise: IExercise) => {
    try {
      const newExercise = await Exercise.create(exercise);

      return { type: 201, message: newExercise };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, exercise: IExercise) => {
    try {
      const exerciseUpdate = await Exercise.findByPk(id);

      if (!exerciseUpdate) {
        return { type: 404, message: "Exercise not found." };
      }

      const exerciseUpdated = await Exercise.update(exercise, { where: { id } });

      return { type: 200, message: exerciseUpdated };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public delete = async (id: number) => {
    try {
      const exercise = await Exercise.findByPk(id);

      if (!exercise) {
        return { type: 404, message: "Exercise not found." };
      }

      await Exercise.destroy({ where: { id } });

      return { type: 200, message: "Exercise deleted." };
    } catch (err) {
      if((err as Error).name === "SequelizeForeignKeyConstraintError") {
        return { type: 400, message: "Cannot delete exercise due to a foreign key constraint." };
      } else{
        return { type: 500, message: (err as Error).message };
      }
    }
  };

  public patch = async (id: number, updates: Partial<Exercise>) => {
    try {
      const exercise = await Exercise.findByPk(id);

      if (!exercise) {
        return { type: 404, message: "Exercise not found." };
      }

      await Exercise.update(updates, { where: { id } } );

      return { type: 200, message: exercise };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

};