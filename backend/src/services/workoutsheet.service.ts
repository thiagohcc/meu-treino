import Workoutsheet from "../models/Workoutsheet";

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
      const workoutsheet = await Workoutsheet.findByPk(id);

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
      const workoutsheets = await Workoutsheet.findAll({ where: { customer_id: id }});

      if (!workoutsheets) {
        return { type: 404, message: 'workoutsheet for customer_id not found.'}
      }

      return { type: 200, message: workoutsheets }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  };

  public post = async (workoutsheet: Workoutsheet) => {
    try {
      const newWorkoutsheet = await Workoutsheet.create(workoutsheet);
      return { type: 201, message: newWorkoutsheet };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, workoutsheet: Workoutsheet) => {
    try {
      const updatedWorkoutsheet = await Workoutsheet.findByPk(id);

      if (!updatedWorkoutsheet) {
        return { type: 404, message: 'workoutsheet not found.' }
      }

      return { type: 200, message: updatedWorkoutsheet }
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

      return { type: 200, message: 'Workout sheet deleted.' }
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

      await workoutsheet.update(updates);
      return { type: 200, message: workoutsheet }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  };

};
