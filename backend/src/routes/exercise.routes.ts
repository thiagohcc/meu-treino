import { Router } from 'express';
import ExerciseController from '../controllers/exercise.controller';

const exerciseRouter: Router = Router();
const exerciseController: ExerciseController = new ExerciseController();

exerciseRouter.get('/', (req, res) => exerciseController.getAll(req, res));
exerciseRouter.get('/name', (req, res) => exerciseController.getByName(req, res));
exerciseRouter.get('/:id', (req, res) => exerciseController.getById(req, res));
exerciseRouter.post('/', (req, res) => exerciseController.post(req, res));
exerciseRouter.put('/:id', (req, res) => exerciseController.put(req, res));
exerciseRouter.delete('/:id', (req, res) => exerciseController.delete(req, res));
exerciseRouter.patch('/:id', (req, res) => exerciseController.patch(req, res));

export default exerciseRouter;