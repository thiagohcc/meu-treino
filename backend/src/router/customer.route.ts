import { Router } from 'express';
import CustomerController from '../controllers/customer.controller';

const customerRouter: Router = Router();
const customerController: CustomerController = new CustomerController();

customerRouter.get('/', (req, res) => customerController.getAll);
customerRouter.get('/:id', (req, res) => customerController.getById);
customerRouter.get('/:cpf', (req, res) => customerController.getByCpf);
customerRouter.get('/:email', (req, res) => customerController.getByEmail);

export default customerRouter;