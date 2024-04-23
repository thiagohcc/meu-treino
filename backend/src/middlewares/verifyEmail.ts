import { Request, Response, NextFunction } from 'express';

const verifyEmail = (req: Request, res: Response, next: NextFunction): void | Response => {
  let email: string;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  req.method === 'POST' ? email = req.body.customer.email : email = req.body.email;

  if (email === undefined) {
    return res.status(400).json({ message: 'Email não informado' });
  }

  if (email === '') {
    return res.status(400).json({ message: 'Email não pode ser vazio' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  next();
};

const verifyEmailPatch = (req: Request, res: Response, next: NextFunction): void | Response => {
  const email = req.body.updates.email;

  if (email === undefined) {
    next();
  } else {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (email === '') {
      return res.status(400).json({ message: 'Email não pode ser vazio' });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email inválido' });
    }

    next();
  }
};

export default { verifyEmail, verifyEmailPatch };