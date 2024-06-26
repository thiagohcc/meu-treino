import { Request, Response } from 'express';
import ExerciseService from '../services/exercise.service';

import { inject, injectable } from 'tsyringe';

@injectable()
class ExerciseController {
  constructor(
    @inject('ExerciseService') private exerciseService: ExerciseService
  ) {};

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.getAll();
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.getById(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async getByName(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.getByName(req.query.name as string);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async post(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.post(req.body);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async put(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.put(Number(req.params.id), req.body);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.delete(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async patch(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.patch(Number(req.params.id), req.body.updates);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

};

export default ExerciseController;