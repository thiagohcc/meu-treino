import { Router } from 'express';
import CustomerController from '../controllers/customer.controller';

const customerRouter: Router = Router();
const customerController: CustomerController = new CustomerController();

customerRouter.get('/', (req, res) => customerController.getAll(req, res));
customerRouter.get('/:id', (req, res) => customerController.getById(req, res));
customerRouter.get('/:cpf', (req, res) => customerController.getByCpf(req, res));
customerRouter.get('/:email', (req, res) => customerController.getByEmail(req, res));

export default customerRouter;