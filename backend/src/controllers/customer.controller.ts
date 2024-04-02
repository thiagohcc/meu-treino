import { Request, Response } from 'express';

import CustomerService from '../services/customer.service';

export default class CustomerController {
  private customerService: CustomerService;

  constructor() {
    this.customerService = new CustomerService();
  };

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getAll();
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getById(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async getByCpf(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getByCpf(req.body.cpf);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async getByEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getByEmail(req.body.email);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public post = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.customerService.post(req.body);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public put = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.customerService.put(Number(req.params.id), req.body);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.customerService.delete(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public patch = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.customerService.patch(Number(req.params.id), req.body.updates);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public getByIdComplete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.customerService.getByIdComplete(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };
  
}