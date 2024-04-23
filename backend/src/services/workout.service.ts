import 'reflect-metadata';
import Workout from '../models/Workout';
import IWorkout from '../interfaces/IWorkout';
import WorkoutExercise from '../models/WorkoutExercise';
import Exercise from '../models/Exercise';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class WorkoutService {
  public getAll = async () => {
    try {
      const allWorkouts = await Workout.findAll({ include: [{model: Exercise}]});
      
      return { type: 200, message: allWorkouts };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getById = async (id: number) => {
    try {
      const workout = await Workout.findByPk(id, { include: [{model: Exercise}] });

      if (!workout) {
        return { type: 404, message: 'Workout not found.' };
      }

      return { type: 200, message: workout };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getByWorkoutsheetId = async (workoutsheetId: number) => {
    try {
      const workouts = await Workout.findAll({ where: { workoutsheet_id: workoutsheetId }, include: [{model: Exercise}]} );

      if (!workouts) {
        return { type: 404, message: 'Workouts not found.' };
      }

      return { type: 200, message: workouts };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public post = async (workoutData: IWorkout, exerciseId: number) => {
    try {
      const exercise = await Exercise.findByPk(exerciseId);
      if (!exercise) {
        return { type: 404, message: 'Exercise not found.' };
      };

      const newWorkout = await Workout.create(workoutData);

      const workoutId = Number(newWorkout.id);

      await WorkoutExercise.create({
        workoutId,
        exerciseId,
      });

      const workout = await Workout.findByPk(workoutId, { include: [{model: Exercise}] });

      return { type: 201, message: { workout } };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, updates: Partial<Workout>) => {
    try {
      const workout = await Workout.findByPk(id);

      if (!workout) {
        return { type: 404, message: 'Workout not found.' };
      }

      const wornoutUpdated = await Workout.update(updates, { where: { id } } );

      return { type: 200, message: wornoutUpdated };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public delete = async (id: number) => {
    try {
      const workout = await Workout.findByPk(id);

      if (!workout) {
        return { type: 404, message: 'Workout not found.' };
      }

      await Workout.destroy({ where: { id }});

      return { type: 200, message: 'Workout deleted.' };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public patch = async (id: number, updates: Partial<Workout>) => {
    try {
      const workout = await Workout.findByPk(id);

      if (!workout) {
        return { type: 404, message: 'Workout not found.' };
      }

      const updatedWorkout = await Workout.update(updates, { where: { id } } );

      return { type: 200, message: updatedWorkout };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

};
