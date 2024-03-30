import { Request, Response } from 'express';

import WorkoutService from '../services/workout.service';

export default class WorkoutController {
  private workoutService: WorkoutService;

  constructor() {
    this.workoutService = new WorkoutService();
  };

  public getAll = async (req: Request, res: Response) => {
    
    try {
      const { type, message} = await this.workoutService.getAll();

      res.status(type).json(message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const response = await this.workoutService.getById(id);

      res.status(response.type).json(response.message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  };


  public getByWorkoutsheetId = async (req: Request, res: Response) => {
    try {
      const workoutsheetId = parseInt(req.params.workoutsheetId);
      const response = await this.workoutService.getByWorkoutsheetId(workoutsheetId);

      res.status(response.type).json(response.message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  };

  public post = async (req: Request, res: Response) => {
    try {
      const { weight, repetitions, sets, workoutsheetId } = req.body;
      const response = await this.workoutService.post(weight, repetitions, sets, workoutsheetId);

      res.status(response.type).json(response.message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  };

  public put = async (req: Request, res: Response) => {
    try {
      const { weight, repetitions, sets } = req.body;
      const response = await this.workoutService.put(parseInt(req.params.id), weight, repetitions, sets);

      res.status(response.type).json(response.message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const response = await this.workoutService.delete(parseInt(req.params.id));
      res.status(response.type).json(response.message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  };
  
  public patch = async (req: Request, res: Response) => {
    try {
      const response = await this.workoutService.patch(parseInt(req.params.id), req.body.updates);
      res.status(response.type).json(response.message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  }

}