import { container } from 'tsyringe';
import CustomerService from '../services/customer.service';
import CustomerController from '../controllers/customer.controller';

container.register<CustomerService>('CustomerService', { useClass: CustomerService });
container.register('CustomerController', { useClass: CustomerController });

export default container;
