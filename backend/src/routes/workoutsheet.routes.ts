import { Router } from 'express';

import WorkoutsheetController from '../controllers/workoutsheet.controller';

const workoutsheetRouter: Router = Router();
const workoutsheetController = new WorkoutsheetController();

workoutsheetRouter.get('/', workoutsheetController.getAll);
workoutsheetRouter.get('/:id', workoutsheetController.getById);
workoutsheetRouter.get('/customer/:customerId', workoutsheetController.getByCustomerId);
workoutsheetRouter.post('/', workoutsheetController.post);
workoutsheetRouter.put('/:id', workoutsheetController.put);
workoutsheetRouter.delete('/:id', workoutsheetController.delete);
workoutsheetRouter.patch('/:id', workoutsheetController.patch);

export default workoutsheetRouter;