const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
import { Request, Response } from 'express';
import AddressController from '../../../controllers/address.controller';

chai.use(chaiHttp);
const expect = chai.expect;

describe('=== Address Controller ===', () => {
  let addressController: AddressController;

  before(() => {
    addressController = new AddressController();
  });

  describe('Testa a controller Address se:', () => {
    afterEach(() => {
      sinon.restore();
    });
  
    it('- retorna todos endereços corretamente:', async () => {
      const expectedAddresses = [
        {
          street: 'Rua A',
          number: 123,
          neighborhood: 'Bairro A',
          city: 'Cidade A',
          state: 'Estado A',
          country: 'País A',
          zip_code: '12345-678',
          is_active: true
        },
        {
          street: 'Rua B',
          number: 456,
          neighborhood: 'Bairro B',
          city: 'Cidade B',
          state: 'Estado B',
          country: 'País B',
          zip_code: '98765-432',
          is_active: true
        }];

      const req = {} as unknown as Request;
      const res = {
        status: (code: number) => {
          return {
            json: (data: any) => {
              expect(code).to.be.equal(200);
            }
          }
        }
      } as unknown as Response;

      const getAllStub = sinon.stub(addressController, 'getAll').returns(expectedAddresses);

      const result = await addressController.getAll(req, res);

      sinon.assert.calledOnce(getAllStub);
      sinon.assert.calledWith(getAllStub, req, res);

      expect(result).to.be.equal(expectedAddresses);
      expect(result).to.be.an('array');

    });
  });
});