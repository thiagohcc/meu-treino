import Customer from "../models/Customer";

export default class CustomerService {
  public getAll = async () => {
    try {
      const allCustomers = await Customer.findAll();
      return { type: 200, message: allCustomers };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  getById = async (id: number) => {
    try {
      const customer = await Customer.findByPk(id);

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

};

