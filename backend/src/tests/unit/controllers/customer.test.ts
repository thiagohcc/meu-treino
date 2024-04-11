import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');
import { Request, Response } from 'express';
import CustomerController from '../../../controllers/customer.controller';
import container from '../../../container/container.config';
import CustomerService from '../../../services/customer.service';

import * as mock from './mocks/customer.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== Customer Controller ===', () => {

  
  describe('Testa a controller Customer se:', () => {

    afterEach(() => {
      sinon.restore();
    });
  
    it('- retorna todos clientes corretamente.', async () => {
      const expectedResults = { type: 200, message: mock.allCustomers };

      const service = container.resolve<CustomerService>('CustomerService');
      service.getAll = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.allCustomers);
            }
          }
        }
      } as unknown as Response;

      await customerController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWithExactly();
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.getAll = sinon.stub().throws(new Error('Erro ao buscar clientes'));

      const customerController = new CustomerController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao buscar clientes');
            }
          }
        }
      } as unknown as Response;

      await customerController.getAll(req, res);
      
      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWithExactly();
    });

    it('- retorna um cliente corretamente pelo id.', async () => {
      const expectedResults = { type: 200, message: mock.userById };

      const service = container.resolve<CustomerService>('CustomerService');
      service.getById = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.userById);
            }
          }
        }
      } as unknown as Response;

      await customerController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWithExactly(mock.userById.id);
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao buscar um cliente pelo id.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.getById = sinon.stub().throws(new Error('Erro ao buscar cliente pelo id'));

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao buscar cliente pelo id');
            }
          }
        }
      } as unknown as Response;

      await customerController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWithExactly(1);
    });

    it('- retorna um cliente corretamente pelo cpf.', async () => {
      const expectedResults = { type: 200, message: mock.userByCpf };

      const service = container.resolve<CustomerService>('CustomerService');
      service.getByCpf = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { body: { cpf: '12345678901' } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.userByCpf);
            }
          }
        }
      } as unknown as Response;

      await customerController.getByCpf(req, res);

      expect(service.getByCpf).to.have.been.calledOnce;
      expect(service.getByCpf).to.have.been.calledWithExactly('12345678901');
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao buscar um cliente pelo cpf.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.getByCpf = sinon.stub().throws(new Error('Erro ao buscar cliente pelo cpf'));

      const customerController = new CustomerController(service);

      const req = { body: { cpf: '12345678901' } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao buscar cliente pelo cpf');
            }
          }
        }
      } as unknown as Response;

      await customerController.getByCpf(req, res);

      expect(service.getByCpf).to.have.been.calledOnce;
      expect(service.getByCpf).to.have.been.calledWithExactly('12345678901');
    });

    it('- retorna um cliente corretamente pelo email.', async () => {
      const expectedResults = { type: 200, message: mock.userByEmail };

      const service = container.resolve<CustomerService>('CustomerService');
      service.getByEmail = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { body: { email: 'joao@example.com' } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.userByEmail);
            }
          }
        }
      } as unknown as Response;

      await customerController.getByEmail(req, res);

      expect(service.getByEmail).to.have.been.calledOnce;
      expect(service.getByEmail).to.have.been.calledWithExactly('joao@example.com');
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao buscar um cliente pelo email.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.getByEmail = sinon.stub().throws(new Error('Erro ao buscar cliente pelo email'));

      const customerController = new CustomerController(service);

      const req = { body: { email: 'joao@example.com' } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao buscar cliente pelo email');
            }
          }
        }
      } as unknown as Response;

      await customerController.getByEmail(req, res);

      expect(service.getByEmail).to.have.been.calledOnce;
      expect(service.getByEmail).to.have.been.calledWithExactly('joao@example.com');
    });

    it('- retorna mensagem correta ao cadastrar novo usuário simples.', async () => {
      const expectedResults = { type: 201, message: mock.newUserSimpleCreated };

      const service = container.resolve<CustomerService>('CustomerService');
      service.post = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { body: mock.newUserSimple } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(201);
              expect(data).to.be.deep.equal(mock.newUserSimpleCreated);
            }
          }
        }
      } as unknown as Response;

      await customerController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newUserSimple.customer, undefined);
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao cadastrar novo usuário simples.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.post = sinon.stub().throws(new Error('Erro ao cadastrar novo usuário simples'));

      const customerController = new CustomerController(service);

      const req = { body: mock.newUserSimple } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao cadastrar novo usuário simples');
            }
          }
        }
      } as unknown as Response;

      await customerController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newUserSimple.customer, undefined);
    });

    it('- retorna mensagem correta ao cadastrar novo usuário completo.', async () => {
      const expectedResults = { type: 201, message: mock.newUserWithAddressCreated };

      const service = container.resolve<CustomerService>('CustomerService');
      service.post = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { body: mock.newUserWithAddress } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(201);
              expect(data).to.be.deep.equal(mock.newUserWithAddressCreated);
            }
          }
        }
      } as unknown as Response;

      await customerController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newUserWithAddress.customer, mock.newUserWithAddress.address);
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao cadastrar novo usuário completo.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.post = sinon.stub().throws(new Error('Erro ao cadastrar novo usuário completo'));

      const customerController = new CustomerController(service);

      const req = { body: mock.newUserWithAddress } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao cadastrar novo usuário completo');
            }
          }
        }
      } as unknown as Response;

      await customerController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newUserWithAddress.customer, mock.newUserWithAddress.address);
    });

    it('- retorna mensagem correta ao atualizar um usuário.', async () => {
      const expectedResults = { type: 200, message: mock.customerUpdated };

      const service = container.resolve<CustomerService>('CustomerService');
      service.put = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 }, body: mock.customerToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.customerUpdated);
            }
          }
        }
      } as unknown as Response;

      await customerController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWithExactly(1, mock.customerToUpdate);
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao atualizar um usuário.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.put = sinon.stub().throws(new Error('Erro ao atualizar usuário'));

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 }, body: mock.customerToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao atualizar usuário');
            }
          }
        }
      } as unknown as Response;

      await customerController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWithExactly(1, mock.customerToUpdate);
    });

    it('- retorna mensagem correta ao deletar um usuário.', async () => {
      const expectedResults = { type: 200, message: 'Customer deleted.' };

      const service = container.resolve<CustomerService>('CustomerService');
      service.delete = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.equal('Customer deleted.');
            }
          }
        }
      } as unknown as Response;

      await customerController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWithExactly(1);
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao deletar um usuário.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.delete = sinon.stub().throws(new Error('Erro ao deletar usuário'));

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao deletar usuário');
            }
          }
        }
      } as unknown as Response;

      await customerController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWithExactly(1);
    });

    it('- retorna mensagem de erro corretamente caso um cliente não seja encontrado ao deletar.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.delete = sinon.stub().resolves({ type: 404, message: 'Customer not found.' });

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(404);
              expect(data).to.be.equal('Customer not found.');
            }
          }
        }
      } as unknown as Response;

      await customerController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWithExactly(1);
    });

    it('- retorna mensagem correta ao atualizar um usuário.', async () => {
      const expectedResults = { type: 200, message: mock.CustomerUpdatedByData };

      const service = container.resolve<CustomerService>('CustomerService');
      service.patch = sinon.stub().resolves(expectedResults);

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 }, body: { updates: mock.dataToUpdateCustomer } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
              expect(data).to.be.deep.equal(mock.CustomerUpdatedByData);
            }
          }
        }
      } as unknown as Response;

      await customerController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWithExactly(1, mock.dataToUpdateCustomer);
    });

    it('- retorna mensagem de erro corretamente caso um erro ocorra ao atualizar um usuário.', async () => {
      const service = container.resolve<CustomerService>('CustomerService');
      service.patch = sinon.stub().throws(new Error('Erro ao atualizar usuário'));

      const customerController = new CustomerController(service);

      const req = { params: { id: 1 }, body: { updates: mock.dataToUpdateCustomer } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Erro ao atualizar usuário');
            }
          }
        }
      } as unknown as Response;

      await customerController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWithExactly(1, mock.dataToUpdateCustomer);
    });




  });
});