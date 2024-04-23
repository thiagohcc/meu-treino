import { Request, Response, NextFunction } from 'express';
import cpfIsValid from '../helpers/validCPF';

const verifyCPFPostAndPut = (req: Request, res: Response, next: NextFunction): void | Response => {
  let cpf;

  req.method === 'POST' ? cpf = req.body.customer.cpf : cpf = req.body.cpf;

  if (cpf === undefined) {
    return res.status(400).json({ message: 'CPF não informado' });
  }

  if (cpf.length !== 11) {
    return res.status(400).json({ message: 'CPF deve conter 11 dígitos' });
  }

  if (cpf === undefined) {
    return res.status(400).json({ message: 'CPF não informado' });
  }

  if (cpfIsValid(cpf)) {
    return res.status(400).json({ message: 'CPF inválido' });
  }


  next();
};

const verifyCPFPatch = (req: Request, res: Response, next: NextFunction): void | Response => {
  const cpf = req.body.updates.cpf;

  if (cpf === undefined) {
    next();
  } else {
    if (cpf.length !== 11) {
      return res.status(400).json({ message: 'CPF deve conter 11 dígitos' });
    }
  
    if (cpfIsValid(cpf)) {
      return res.status(400).json({ message: 'CPF inválido' });
    }
  
    next();
  }
};


export default { verifyCPFPostAndPut, verifyCPFPatch };