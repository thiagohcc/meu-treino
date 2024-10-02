import 'reflect-metadata';
import { ILoginService } from '../interfaces/ILoginService.interface';
import Customer from '..//models/Customer';
import { generateToken, decodeToken } from '../utils/JWT';
import { inject, injectable } from 'tsyringe';
import ILogin from '../interfaces/ILogin.interface';

@injectable()
export default class LoginService implements ILoginService {
  public login = async (login: ILogin) => {
    try {
      let customer;

      const email = await Customer.findOne({ where: { email: login.userData } });
      const userName = await Customer.findOne({ where: { userName: login.userData } });
      const cpf = await Customer.findOne({ where: { cpf: login.userData } });

      if (email) {
        customer = email;
      } else if (userName) {
        customer = userName;
      } else if (cpf) {
        customer = cpf;
      } else {
        customer = null
      }

    
      if (!customer) {
        return { type: 404, message: 'Customer not found.' };
      }

      const token = generateToken({ id: customer.id, email: customer.email });

      return { type: 200, message: token };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  }

  public logout = async (token: string) => {
    try {
      const decoded = decodeToken(token);

      const customer = await Customer.findByPk(decoded.id);

      if (!customer) {
        return { type: 404, message: 'Customer not found.' };
      }

      return { type: 200, message: 'Token is valid.' };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public verifyToken = async (token: string) => {
    try {
      const decoded = decodeToken(token);

      const customer = await Customer.findByPk(decoded.id);

      if (!customer) {
        return { type: 404, message: 'Customer not found.' };
      }

      return { type: 200, message: 'Token is valid.' };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  }
};