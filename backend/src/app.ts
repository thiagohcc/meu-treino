import 'reflect-metadata';

import * as express from 'express';
const cors = require('cors');

import exerciseRouter from './routes/exercise.routes';
import customerRouter from './routes/customer.routes';
import workoutRouter from './routes/workout.routes';
import addressRouter from './routes/address.routes';
import gymUnitRouter from './routes/gymUnit.routes';
import workoutsheet from './routes/workoutsheet.routes';
import loginRouter from './routes/login.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    this.app.get('/', (req, res) => res.json({ ok: 'backend API is running!'}));
  }

  private config(): void {
    this.app.use(cors());
    
    const accessControl: express.RequestHandler = (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use('/exercise', exerciseRouter);
    this.app.use('/customer', customerRouter);
    this.app.use('/workout', workoutRouter);
    this.app.use('/address', addressRouter);
    this.app.use('/gymUnit', gymUnitRouter);
    this.app.use('/workoutsheet', workoutsheet);
    this.app.use('/login', loginRouter);

  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();
