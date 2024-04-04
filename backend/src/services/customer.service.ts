import 'reflect-metadata';

import Customer from "../models/Customer";
import Address from "../models/Address";

import { inject, injectable } from "tsyringe";

@injectable()
export default class CustomerService {

  public getAll = async () => {
    try {
      const allCustomers = await Customer.findAll();
      return { type: 200, message: allCustomers };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getById = async (id: number) => {
    try {
      const customer = await Customer.findByPk(id, { include: [{ all: true, nested: true }] });

      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }
      return { type: 200, message: customer };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getByCpf = async (cpf: string) => {
    try {
      const customer = await Customer.findOne({ where: { cpf } });
      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }

      return { type: 200, message: customer };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getByEmail = async (email: string) => {
    try {
      const customer = await Customer.findOne({ where: { email } });

      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }

      return { type: 200, message: customer };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public post = async (customer: Customer, address?: Address) => {
    try {
      const newCustomer = await Customer.create(customer);

      if (!address) {
        return { type: 201, message: newCustomer };
      } else {
        const newAddress = await Address.create(address);
        
        newCustomer.address_id = newAddress.id;
        await newCustomer.save();
        
        const customerCreated = await Customer.findByPk(newCustomer.id, { include: [{ model: Address, as: 'address'}] });
  
        return { type: 201, message: customerCreated };
      }
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, customer: Customer) => {
    try {
      const customerToUpdate = await Customer.findByPk(id);

      if (!customerToUpdate) {
        return { type: 404, message: "Customer not found." };
      }

      await customerToUpdate.update(customer);
      return { type: 200, message: customerToUpdate };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public delete = async (id: number) => {
    try {
      const customer = await Customer.findByPk(id);

      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }

      await customer.destroy();
      return { type: 200, message: "Customer deleted." };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  }

  public patch = async (id: number, updates: Partial<Customer>) => {
    try {
      const customer = await Customer.findByPk(id);

      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }

      await customer.update(updates);
      return { type: 200, message: customer };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };
};

