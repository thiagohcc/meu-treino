import * as express from 'express';

import exerciseRouter from './routes/exercise.routes';
import customerRouter from './routes/customer.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    this.app.get('/', (req, res) => res.json({ ok: 'backend API is running!'}));
  }

  private config(): void {
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

  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();
