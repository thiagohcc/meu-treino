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
    const response = await this.addressService.getAll();

    return res.status(response.type).json(response.message);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const response = await this.addressService.getById(id);

    return res.status(response.type).json(response.message);
  };

  public post = async (req: Request, res: Response) => {
    const address = req.body;
    const response = await this.addressService.post(address);

    return res.status(response.type).json(response.message);
  };

  public put = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const address = req.body;
    const response = await this.addressService.put(id, address);

    return res.status(response.type).json(response.message);
  };

  public delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const response = await this.addressService.delete(id);

    return res.status(response.type).json(response.message);
  };

  public patch = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const address = req.body.updates;
    const { type, message } = await this.addressService.patch(id, address);

    return res.status(type).json(message);
  };
}