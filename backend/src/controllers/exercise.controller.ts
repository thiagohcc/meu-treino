import { Request, Response } from 'express';

import ExerciseService from '../services/exercise.service';

export default class ExerciseController {
  private exerciseService: ExerciseService;

  constructor() {
    this.exerciseService = new ExerciseService();
  };

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.getAll();
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.getById(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async getByName(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.getByName(req.params.name);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async post(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.post(req.body.name, req.body.number, req.body.photoUrl, req.body.videoUrl);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async put(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.put(Number(req.params.id), req.body.name, req.body.number, req.body.photoUrl, req.body.videoUrl);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.delete(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async patch(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.exerciseService.patch(Number(req.params.id), req.body.updates);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

};