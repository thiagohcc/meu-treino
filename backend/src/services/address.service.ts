import Address from '../models/Address';

export default class AddressService {
  public getAll = async () => {
    try {
      const allAddresses = await Address.findAll();
      return { type: 200, message: allAddresses };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public getById = async (id: number) => {
    try {
      const address = await Address.findByPk(id);

      if (!address) {
        return { type: 404, message: 'Address not found.' };
      }
      return { type: 200, message: address };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public post = async (address: Address) => {
    try {
      const newAddress = await Address.create(address);
      return { type: 201, message: newAddress };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public put = async (id: number, address: Address) => {
    try {
      const addressToUpdate = await Address.findByPk(id);

      if (!addressToUpdate) {
        return { type: 404, message: 'Address not found.' };
      }

      await addressToUpdate.update(address);
      return { type: 200, message: addressToUpdate };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public delete = async (id: number) => {
    try {
      const address = await Address.findByPk(id);

      if (!address) {
        return { type: 404, message: 'Address not found.' };
      }

      await address.destroy();
      return { type: 200, message: 'Address deleted.' };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

  public patch = async (id: number, updates: Partial<Address>) => {
    try {
      const address = await Address.findByPk(id);

      if (!address) {
        return { type: 404, message: 'Address not found.' };
      }

      await address.update(updates);
      return { type: 200, message: address };
    } catch (err) {
      return { type: 500, message: (err as Error).message };
    }
  };

};
