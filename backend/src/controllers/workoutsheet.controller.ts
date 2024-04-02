import { Request, Response } from 'express';

import WorkoutsheetService from '../services/workoutsheet.service';

export default class WorkoutsheetController {
  private workoutsheetService: WorkoutsheetService;

  constructor() {
    this.workoutsheetService = new WorkoutsheetService();
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const { type, message } = await this.workoutsheetService.getAll();

      res.status(type).json(message);
    } catch (err) {
      res.status(500).json((err as Error).message);
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { type, message } = await this.workoutsheetService.getById(id);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public getByCustomerId = async (req: Request, res: Response) => {
    try {
      const customerId = parseInt(req.params.customerId);
      const { type, message } = await this.workoutsheetService.getByCustomerId(customerId);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public post = async (req: Request, res: Response) => {
    try {
      const newWorkoutsheet = req.body;
      const { type, message } = await this.workoutsheetService.post(newWorkoutsheet);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public put = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const updatedWorkoutsheet = req.body;
      const { type, message } = await this.workoutsheetService.put(id, updatedWorkoutsheet);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { type, message } = await this.workoutsheetService.delete(id);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public patch = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const updatedWorkoutsheet = req.body;
      const { type, message } = await this.workoutsheetService.patch(id, updatedWorkoutsheet);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };
  
};
