import 'mocha';
import { expect } from 'chai';
import Customer from '../../../models/Customer';
import Address from '../../../models/Address';
import Workoutsheet from '../../../models/Workoutsheet';

describe('CustomerModel', () => {
  it('should create a new customer instance', () => {
    const customer = Customer.build({
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      gender: 'male',
      phone: '123456789',
      cpf: '12345678901',
      isActive: true,
    });
    
    expect(customer).to.be.an.instanceOf(Customer);
    expect(customer.first_name).to.equal('John');
    // Test other attributes as needed
  });

  it('should define associations correctly', () => {
    expect(Customer.associations.workoutsheets).to.exist;
    expect(Customer.associations.address).to.exist;
    expect(Workoutsheet.associations.customer).to.exist;
    expect(Address.associations.customer).to.exist;
    // Test other associations as needed
  });
});