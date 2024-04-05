import { Router } from 'express';
import container from '../container/container.config';
import GymUnitController from '../controllers/gymUnit.controller';

const gymUnitRouter: Router = Router();
const gymUnitController: GymUnitController = container.resolve<GymUnitController>('GymUnitController');

gymUnitRouter.get('/', (req, res) => gymUnitController.getAll(req, res));
gymUnitRouter.get('/:id', (req, res) => gymUnitController.getById(req, res));
gymUnitRouter.post('/', (req, res) => gymUnitController.post(req, res));
gymUnitRouter.put('/:id', (req, res) => gymUnitController.put(req, res));
gymUnitRouter.delete('/:id', (req, res) => gymUnitController.delete(req, res));
gymUnitRouter.patch('/:id', (req, res) => gymUnitController.patch(req, res));

export default gymUnitRouter;