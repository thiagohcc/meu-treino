import Address from '../models/Address';

export interface IAddressModel {
  findAll(): Promise<Address[]>;
  findByPk(id: number): Promise<Address | null>;
  create(address: Address): Promise<Address>;
  update(address: Address): Promise<Address>;
  delete(id: number): Promise<void>;
}

export interface IAddressService {
  getAll(): Promise<{ type: number; message: Address[] | string }>;
  getById(id: number): Promise<{ type: number; message: Address | string }>;
  post(address: Address): Promise<{ type: number; message: Address | string }>;
  put(id: number, address: Address): Promise<{ type: number; message: Address | string }>;
  delete(id: number): Promise<{ type: number; message: string }>;
  patch(id: number, updates: Partial<Address>): Promise<{ type: number; message: Address | string }>;
};
