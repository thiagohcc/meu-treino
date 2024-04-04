import { container } from 'tsyringe';
import CustomerService from '../services/customer.service';
import CustomerController from '../controllers/customer.controller';
import AddressController from '../controllers/address.controller';
import AddressService from '../services/address.service';

container.register<CustomerService>('CustomerService', { useClass: CustomerService });
container.register('CustomerController', { useClass: CustomerController });

container.register<AddressController>('AddressController', { useClass: AddressController });
container.register<AddressService>('AddressService', { useClass: AddressService });

export default container;
