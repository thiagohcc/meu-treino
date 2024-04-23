import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const sinon = require('sinon');
import { Request, Response } from 'express';
import AddressController from '../../../controllers/address.controller';
import AddressService from '../../../services/address.service';
import container from '../../../container/container.config';

import mock from '../mocks/address.mock';

chai.use(sinonChai);
const expect = chai.expect;

describe('=== Address_Controller ===', () => {

  describe('Testa a controller Address se:', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('retorna todos os endereços corretamente', async () => {
      const expectResults = { type: 200, message: mock.allAddresses };

      const service = container.resolve<AddressService>('AddressService');
      service.getAll = sinon.stub().resolves(expectResults);

      const addressController = new AddressController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (message: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(message).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await addressController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWithExactly();
    });

    it('retorna uma mensagem de erro ao tentar retornar todos os endereços', async () => {
      const service = container.resolve<AddressService>('AddressService');
      service.getAll = sinon.stub().throws(new Error('Internal server error.'));

      const addressController = new AddressController(service);

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Internal server error.');
            }
          };
        }
      } as unknown as Response;

      await addressController.getAll(req, res);

      expect(service.getAll).to.have.been.calledOnce;
      expect(service.getAll).to.have.been.calledWithExactly();
    });

    it('retorna corretamente um endereço por um id', async () => {
      const expectResults = { type: 200, message: mock.address };

      const service = container.resolve<AddressService>('AddressService');
      service.getById = sinon.stub().resolves(expectResults);

      const addressController = new AddressController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (message: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(message).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await addressController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.be

    });

    it('retorna uma mensagem de erro ao tentar retornar um endereço por um id', async () => {
      const service = container.resolve<AddressService>('AddressService');
      service.getById = sinon.stub().throws(new Error('Internal server error.'));

      const addressController = new AddressController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Internal server error.');
            }
          };
        }
      } as unknown as Response;

      await addressController.getById(req, res);

      expect(service.getById).to.have.been.calledOnce;
      expect(service.getById).to.have.been.calledWithExactly(1);
    });

    it('é possível cadastrar corretamente um endereço', async () => {
      const expectResults = { type: 201, message: mock.address };

      const service = container.resolve<AddressService>('AddressService');
      service.post = sinon.stub().resolves(expectResults);

      const addressController = new AddressController(service);

      const req = { body: mock.newAddress } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (message: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(message).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await addressController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newAddress);
    });

    it('retorna uma mensagem de erro ao tentar cadastrar um endereço', async () => {
      const service = container.resolve<AddressService>('AddressService');
      service.post = sinon.stub().throws(new Error('Internal server error.'));

      const addressController = new AddressController(service);

      const req = { body: mock.newAddress } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Internal server error.');
            }
          };
        }
      } as unknown as Response;

      await addressController.post(req, res);

      expect(service.post).to.have.been.calledOnce;
      expect(service.post).to.have.been.calledWithExactly(mock.newAddress);
    });

    it('é possível atualizar corretamente um endereço', async () => {
      const expectResults = { type: 200, message: mock.addressUpdated };

      const service = container.resolve<AddressService>('AddressService');
      service.put = sinon.stub().resolves(expectResults);

      const addressController = new AddressController(service);

      const req = { params: { id: 1 }, body: mock.addressToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (message: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(message).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await addressController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWithExactly(1, mock.addressToUpdate);

    });

    it('retorna uma mensagem de erro ao tentar atualizar um endereço', async () => {
      const service = container.resolve<AddressService>('AddressService');
      service.put = sinon.stub().throws(new Error('Internal server error.'));

      const addressController = new AddressController(service);

      const req = { params: { id: 1 }, body: mock.addressToUpdate } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Internal server error.');
            }
          };
        }
      } as unknown as Response;

      await addressController.put(req, res);

      expect(service.put).to.have.been.calledOnce;
      expect(service.put).to.have.been.calledWithExactly(1, mock.addressToUpdate);
    });

    it('é possível deletar corretamente um endereço', async () => {
      const expectResults = { type: 200, message: 'Endereço deletado com sucesso.' };

      const service = container.resolve<AddressService>('AddressService');
      service.delete = sinon.stub().resolves(expectResults);

      const addressController = new AddressController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (message: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(message).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await addressController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWithExactly(1);
    });

    it('retorna uma mensagem de erro ao tentar deletar um endereço', async () => {
      const service = container.resolve<AddressService>('AddressService');
      service.delete = sinon.stub().throws(new Error('Internal server error.'));

      const addressController = new AddressController(service);

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Internal server error.');
            }
          };
        }
      } as unknown as Response;

      await addressController.delete(req, res);

      expect(service.delete).to.have.been.calledOnce;
      expect(service.delete).to.have.been.calledWithExactly(1);
    });

    it('é possível atualizar parcialmente um endereço', async () => {
      const expectResults = { type: 200, message: mock.addressUpdated };

      const service = container.resolve<AddressService>('AddressService');
      service.patch = sinon.stub().resolves(expectResults);

      const addressController = new AddressController(service);

      const req = { params: { id: 1 }, body: mock.dataToUpdateAddress } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (message: any) => {
              expect(code).to.be.equal(expectResults.type);
              expect(message).to.be.equal(expectResults.message);
            }
          };
        }
      } as unknown as Response;

      await addressController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWithExactly(1, mock.dataToUpdateAddress.updates);
    });

    it('retorna uma mensagem de erro ao tentar atualizar parcialmente um endereço', async () => {
      const service = container.resolve<AddressService>('AddressService');
      service.patch = sinon.stub().throws(new Error('Internal server error.'));

      const addressController = new AddressController(service);

      const req = { params: { id: 1 }, body: mock.dataToUpdateAddress } as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(500);
              expect(data).to.be.equal('Internal server error.');
            }
          };
        }
      } as unknown as Response;

      await addressController.patch(req, res);

      expect(service.patch).to.have.been.calledOnce;
      expect(service.patch).to.have.been.calledWithExactly(1, mock.dataToUpdateAddress.updates);
    });

  });

});