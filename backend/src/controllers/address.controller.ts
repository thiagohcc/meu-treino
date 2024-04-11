import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';

import AddressService from '../services/address.service';

@injectable()
export default class AddressController {

  constructor(
    @inject('AddressService') private addressService: AddressService
  ) {}

  public getAll = async (req: Request, res: Response) => {
    try {
      const response = await this.addressService.getAll();

      return res.status(response.type).json(response.message);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    } 
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const response = await this.addressService.getById(Number(req.params.id));
      return res.status(response.type).json(response.message);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  public post = async (req: Request, res: Response) => {
    try {
      const response = await this.addressService.post(req.body);
      return res.status(response.type).json(response.message);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  public put = async (req: Request, res: Response) => {
    try {
      const response = await this.addressService.put(Number(req.params.id), req.body);
      return res.status(response.type).json(response.message);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const response = await this.addressService.delete(Number(req.params.id));
      return res.status(response.type).json(response.message);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  public patch = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const address = req.body.updates;
      const { type, message } = await this.addressService.patch(Number(req.params.id), req.body.updates);

      return res.status(type).json(message);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }

  };
}