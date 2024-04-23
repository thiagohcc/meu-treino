import 'reflect-metadata';
import { Op } from 'sequelize';

import Customer from "../models/Customer";
import INewCustomer from "../interfaces/ICustomer";
import Address from "../models/Address";
import IAddress from '../interfaces/IAddress';

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
      const customer = await Customer.findOne({ where: { cpf }, include: [{ all: true, nested: true }] });
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
      const customer = await Customer.findOne({ where: { email }, include: [{ all: true, nested: true }] });

      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }

      return { type: 200, message: customer };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public post = async (customer: INewCustomer, address?: IAddress) => {
    try {

      const cpfExists = await Customer.findOne({ where: { cpf: customer.cpf } });
      const emailExists = await Customer.findOne({ where: { email: customer.email } });

      if (cpfExists) {
        return { type: 409, message: "CPF already exists." };
      }

      if (emailExists) {
        return { type: 409, message: "Email already exists." };
      }

      if (!address) {
        const newCustomer = await Customer.create(customer);
        return { type: 201, message: newCustomer };

      } else {
        const newAddress = await Address.create(address);
        const newCustomer = { ...customer, address_id: newAddress.id };
        const customerCreated = await Customer.create(newCustomer);
        
        const customerCompleted = await Customer.findByPk(customerCreated.id, { include: [{ model: Address, as: 'address'}] });
  
        return { type: 201, message: customerCompleted };
      }
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, customer: INewCustomer) => {
    try {
      const cpfExists = await Customer.findOne({ where: { cpf: customer.cpf, id: { [Op.not]: id } } });
      const emailExists = await Customer.findOne({ where: { email: customer.email, id: { [Op.not]: id } } });

      if (cpfExists) {
        return { type: 409, message: "CPF already exists." };
      }

      if (emailExists) {
        return { type: 409, message: "Email already exists." };
      }
      
      const customerToUpdate = await Customer.findByPk(id);

      if (!customerToUpdate) {
        return { type: 404, message: "Customer not found." };
      }
      await Customer.update(customer, { where: { id } });
      const customerUpdated = await Customer.findOne({ where: { id } });
      return { type: 200, message: customerUpdated };
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

      await Customer.destroy({ where: { id } });
      return { type: 200, message: "Customer deleted." };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  }

  public patch = async (id: number, updates: Partial<Customer>) => {
    try {
      const cpfExists = await Customer.findOne({ where: { cpf: updates.cpf, id: { [Op.not]: id } } });
      const emailExists = await Customer.findOne({ where: { email: updates.email, id: { [Op.not]: id } } });

      if (cpfExists) {
        return { type: 409, message: "CPF already exists." };
      }

      if (emailExists) {
        return { type: 409, message: "Email already exists." };
      }
      const customer = await Customer.findByPk(id, { include: [{ all: true, nested: true }] });

      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }

      await Customer.update(updates, { where: { id } });
      const customerUpdated = await Customer.findOne({ where: { id } });
      
      return { type: 200, message: customerUpdated };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };
};

