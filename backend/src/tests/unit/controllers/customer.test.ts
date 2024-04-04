const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
import { Request, Response } from 'express';
import CustomerController from '../../../controllers/customer.controller';
const CustomerService = require('../../../services/customer.service');

chai.use(chaiHttp);
const expect = chai.expect;

describe('=== Customer Controller ===', () => {
  let customerController: CustomerController;

  describe('Testa a controller Customer se:', () => {
  
    it.only('- retorna todos clientes corretamente:', async () => {

      const expectedCustomers = [
        {
          first_name: 'João',
          last_name: 'Silva',
          email: 'joao@example.com',
          gender: 'masculino',
          phone: '1122334455',
          cpf: '12345678901',
          is_active: true,
          address_id: 1
        },
        {
          first_name: 'Maria',
          last_name: 'Santos',
          email: 'maria@example.com',
          gender: 'feminino',
          phone: '9988776655',
          cpf: '98765432101',
          is_active: true,
          address_id: 2
        }
      ];

      const customerServiceStub = sinon.createStubInstance(CustomerService);
      customerServiceStub.getAll.returns({ type: 200, message: expectedCustomers });

      const req = {} as unknown as Request;
      const res = {
        staus: sinon.stub().returnsThis(),
        json: sinon.stub()
      } as unknown as Response;

      const customerController = new CustomerController(customerServiceStub);

      const result = await customerController.getAll(req, res);

      sinon.assert.calledOnce(customerServiceStub.getAll);
      sinon.assert.calledWithExactly(res.status, 200);
      sinon.assert.calledWithExactly(res.json, expectedCustomers);

      sinon.restore();
    });

    it('- retorna um cliente corretamente:', async () => {
      const customer = {
        first_name: 'João',
        last_name: 'Silva',
        email: 'joao@example.com',
        gender: 'masculino',
        phone: '1122334455',
        cpf: '12345678901',
        is_active: true,
        address_id: 1
      };

      const req = {
        params: {
          id: 1
        }
      } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
            }
          }
        }
      } as unknown as Response;

      const getByIdStub = sinon.stub(customerController, 'getById').returns(customer);

      const result = await customerController.getById(req, res);

      sinon.assert.calledOnce(getByIdStub);
      sinon.assert.calledWithExactly(getByIdStub, req, res);

      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(customer);

      getByIdStub.restore();
    });

    it('- retorna mensagem de erro corretamente, caso id passado não exista:', async () => {
      const req = {
        params: {
          id: 10000000
        }
      } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(404);
            }
          }
        }
      } as unknown as Response;

      const getByIdStub = sinon.stub(customerController, 'getById').returns('Customer not found.');

      const result = await customerController.getById(req, res);

      sinon.assert.calledOnce(getByIdStub);
      sinon.assert.calledWithExactly(getByIdStub, req, res);

      expect(result).to.be.a('string');
      expect(result).to.be.equal('Customer not found.');

      getByIdStub.restore();
    });

    it('- retorna um cliente por CPF corretamente:', async () => {
      const customer = {
        first_name: 'João',
        last_name: 'Silva',
        email: 'joao@example.com',
        gender: 'masculino',
        phone: '1122334455',
        cpf: '12345678901',
        is_active: true,
        address_id: 1
      };

      const req = {
        body: {
          cpf: '12345678901'
        }
      } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
            }
          }
        }
      } as unknown as Response;

      const getByCpfStub = sinon.stub(customerController, 'getByCpf').returns(customer);

      const result = await customerController.getByCpf(req, res);

      sinon.assert.calledOnce(getByCpfStub);
      sinon.assert.calledWithExactly(getByCpfStub, req, res);

      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(customer);
    });
  });
});