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

  public post = async (customer: Customer) => {
    try {
      const newCustomer = await Customer.create(customer);
      return { type: 201, message: newCustomer };
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

  public getByIdComplete = async (id: number) => {
    try {
      const customer = await Customer.findByPk(
        id,
        {
          include: [
            {
              all: true,
            },
          ],
        }
      );

      if (!customer) {
        return { type: 404, message: "Customer not found." };
      }

      return { type: 200, message: customer };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  }

};

