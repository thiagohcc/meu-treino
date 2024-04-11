import Exercise from "../models/Exercise"

import { injectable } from "tsyringe";

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

  public post = async (exercise: Exercise) => {
    try {
      const newExercise = await Exercise.create(exercise);

      return { type: 201, message: newExercise };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, exercise: Exercise) => {
    try {
      const exerciseUpdate = await Exercise.findByPk(id);

      if (!exerciseUpdate) {
        return { type: 404, message: "Exercise not found." };
      }

      await exerciseUpdate.update(exercise);

      return { type: 200, message: exercise };
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

      await exercise.destroy();

      return { type: 200, message: "Exercise deleted." };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public patch = async (id: number, updates: Partial<Exercise>) => {
    try {
      const exercise = await Exercise.findByPk(id);

      if (!exercise) {
        return { type: 404, message: "Exercise not found." };
      }

      await exercise.update(updates);

      return { type: 200, message: exercise };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

};