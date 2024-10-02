import 'reflect-metadata';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ILoginService } from '../interfaces/ILoginService.interface';

@injectable()
export default class LoginController {
  private loginService: ILoginService;
  
  constructor(@inject('LoginService') loginService: ILoginService) {
    this.loginService = loginService;
  };

  public login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const login = {userData: req.body.email, password: req.body.password};
      const { type, message } = await this.loginService.login(login);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public logout = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.loginService.logout(req.headers.token as string);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

  public verifyToken = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type, message } = await this.loginService.verifyToken(req.headers.token as string);
      return res.status(type).json(message);
    } catch (err) {
      return res.status(500).json((err as Error).message);
    }
  };

};
