const allAddresses = [
  {
    id: 1,
    street: "Rua das Flores",
    number: 123,
    complement: "Apto 101",
    neighborhood: "Centro",
    city: "Cidade A",
    state: "Estado A",
    country: "País A",
    zip_code: "12345-678"
  },
  {
    id: 2,
    street: "Avenida Brasil",
    number: 456,
    complement: "Casa",
    neighborhood: "Jardim das Palmeiras",
    city: "Cidade B",
    state: "Estado B",
    country: "País B",
    zip_code: "54321-987"
  }
];

const address = {
  id: 1,
  street: "Rua das Flores",
  number: 123,
  complement: "Apto 101",
  neighborhood: "Centro",
  city: "Cidade A",
  state: "Estado A",
  country: "País A",
  zip_code: "12345-678"
};

const newAddress = {
  street: "Rua das Flores",
  number: 123,
  complement: "Apto 101",
  neighborhood: "Centro",
  city: "Cidade A",
  state: "Estado A",
  country: "País A",
  zip_code: "12345-678"
};

const addressToUpdate = {
  street: "Rua das Florestas",
  number: 321,
  complement: "Apto 101",
  neighborhood: "Centro",
  city: "Cidade A",
  state: "Estado A",
  country: "País A",
  zip_code: "12345-678"
};

const addressUpdated = {
  id: 1,
  street: "Rua das Florestas",
  number: 321,
  complement: "Apto 101",
  neighborhood: "Centro",
  city: "Cidade A",
  state: "Estado A",
  country: "País A",
  zip_code: "12345-678"
};

const dataToUpdateAddress = {
  updates: {
    street: "Rua das Florestas",
    number: 321
  }
};

export default {
  allAddresses,
  address,
  newAddress,
  addressToUpdate,
  addressUpdated,
  dataToUpdateAddress
};