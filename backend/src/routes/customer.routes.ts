import { Router } from 'express';
import container from '../container/container.config';
import CustomerController from '../controllers/customer.controller';

const customerRouter: Router = Router();
const customerController = container.resolve<CustomerController>(CustomerController);

customerRouter.get('/', (req, res) => customerController.getAll(req, res));
customerRouter.get('/cpf', (req, res) => customerController.getByCpf(req, res));
customerRouter.get('/email', (req, res) => customerController.getByEmail(req, res));
customerRouter.get('/:id', (req, res) => customerController.getById(req, res));
customerRouter.post('/', (req, res) => customerController.post(req, res));
customerRouter.put('/:id', (req, res) => customerController.put(req, res));
customerRouter.delete('/:id', (req, res) => customerController.delete(req, res));
customerRouter.patch('/:id', (req, res) => customerController.patch(req, res));

export default customerRouter;