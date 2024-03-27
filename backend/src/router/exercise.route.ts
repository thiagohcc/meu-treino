import { Router } from 'express';
import ExerciseController from '../controllers/exercise.controller';

const exerciseRouter: Router = Router();
const exerciseController: ExerciseController = new ExerciseController();

exerciseRouter.get('/', (req, res) => exerciseController.getAll);
exerciseRouter.get('/:id', (req, res) => exerciseController.getById);
exerciseRouter.get('/:name', (req, res) => exerciseController.getByName);
exerciseRouter.post('/', (req, res) => exerciseController.post);
exerciseRouter.put('/:id', (req, res) => exerciseController.put);
exerciseRouter.delete('/:id', (req, res) => exerciseController.delete);
exerciseRouter.patch('/:id', (req, res) => exerciseController.patch);

export default exerciseRouter;