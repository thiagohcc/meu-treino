import { Request, Response } from 'express';

import GymUnitService from '../services/gymUnit.service';

export default class GymUnitController {
  private gymUnitService: GymUnitService;

  constructor() {
    this.gymUnitService = new GymUnitService();
  };

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.gymUnitService.getAll();
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.gymUnitService.getById(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public post = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.gymUnitService.post(req.body);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public put = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.gymUnitService.put(Number(req.params.id), req.body);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.gymUnitService.delete(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public patch = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.gymUnitService.patch(Number(req.params.id), req.body.updates);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  }
};
