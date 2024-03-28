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
      const { type, message } = await this.customerService.getByCpf(req.params.cpf);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  async getByEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getByEmail(req.params.email);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };
}