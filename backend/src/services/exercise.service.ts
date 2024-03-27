import Exercise from "../models/Exercise"

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

  public post = async (name: string, number: number, photoUrl: string, videoUrl: string) => {
    try {
      const exercise = await Exercise.create({ name, number, photoUrl, videoUrl });

      return { type: 201, message: exercise };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, name: string, number: number, photoUrl: string, videoUrl: string) => {
    try {
      const exercise = await Exercise.findByPk(id);

      if (!exercise) {
        return { type: 404, message: "Exercise not found." };
      }

      await exercise.update({ name, number, photoUrl, videoUrl });

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