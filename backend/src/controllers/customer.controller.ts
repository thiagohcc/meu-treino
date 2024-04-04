import 'reflect-metadata';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import CustomerService from '../services/customer.service';

@injectable()
export default class CustomerController {
  constructor(
    @inject('CustomerService') private customerService: CustomerService
  ) {}

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getAll();
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getById(Number(req.params.id));
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async getByCpf(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getByCpf(req.body.cpf);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public async getByEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await this.customerService.getByEmail(req.body.email);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public post = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.customerService.post(req.body.customer, req.body.address);
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
}