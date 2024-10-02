import ILogin from "./ILogin.interface";

export interface ILoginService {
  login: (login: ILogin) => Promise<{ type: number; message: string }>;
  logout: (token: string) => Promise<{ type: number; message: string }>;
  verifyToken: (token: string) => Promise<{ type: number; message: string }>;
};