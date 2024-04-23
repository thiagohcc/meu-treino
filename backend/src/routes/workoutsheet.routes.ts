import { Router } from 'express';
import container from '../container/container.config';
import WorkoutsheetController from '../controllers/workoutsheet.controller';

const workoutsheetRouter: Router = Router();
const workoutsheetController: WorkoutsheetController = container.resolve<WorkoutsheetController>('WorkoutsheetController');

workoutsheetRouter.get('/', workoutsheetController.getAll);
workoutsheetRouter.get('/:id', workoutsheetController.getById);
workoutsheetRouter.get('/customer/:customerId', workoutsheetController.getByCustomerId);
workoutsheetRouter.post('/', workoutsheetController.post);
workoutsheetRouter.put('/:id', workoutsheetController.put);
workoutsheetRouter.delete('/:id', workoutsheetController.delete);
workoutsheetRouter.patch('/:id', workoutsheetController.patch);

export default workoutsheetRouter;