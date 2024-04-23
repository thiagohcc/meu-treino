const allUnits = [
  {
    id: 1,
    name: "BodyTech",
    phone: "31994778380",
    email: "contato@bodytech.com",
    open_hour: "10:00:00",
    close_hour: "18:00:00",
    address_id: 13,
    address: {
      id: 13,
      street: "Rua das Palmeiras",
      number: 321,
      complement: "Casa",
      neighborhood: "Jardim das Flores",
      city: "Cidade M",
      state: "Estado M",
      country: "País M",
      zip_code: "98765-432"
    }
  },
  {
    id: 2,
    name: "CrossFit Power",
    phone: "9988776655",
    email: "contato@crossfitpower.com",
    open_hour: "07:00:00",
    close_hour: "21:00:00",
    address_id: 14,
    address: {
      id: 14,
      street: "Avenida dos Lírios",
      number: 654,
      complement: "Bloco E",
      neighborhood: "Vila Verde",
      city: "Cidade N",
      state: "Estado N",
      country: "País N",
      zip_code: "54321-123"
    }
  },
  {
    id: 3,
    name: "Muscle Fitness",
    phone: "3344556677",
    email: "contato@musclefitness.com",
    open_hour: "08:00:00",
    close_hour: "20:00:00",
    address_id: 15,
    address: {
      id: 15,
      street: "Travessa das Flores",
      number: 987,
      complement: "Loja 03",
      neighborhood: "Centro Comercial",
      city: "Cidade O",
      state: "Estado O",
      country: "País O",
      zip_code: "98765-321"
    }
  },
  {
    id: 4,
    name: "Gym Extreme",
    phone: "5544332211",
    email: "contato@gymextreme.com",
    open_hour: "09:00:00",
    close_hour: "19:00:00",
    address_id: 16,
    address: {
      id: 16,
      street: "Rua dos Girassóis",
      number: 654,
      complement: "Sala 303",
      neighborhood: "Bairro dos Lírios",
      city: "Cidade P",
      state: "Estado P",
      country: "País P",
      zip_code: "12345-678"
    }
  },
  {
    id: 5,
    name: "BodyTech",
    phone: "6677889900",
    email: "contato@bodytech.com",
    open_hour: "10:00:00",
    close_hour: "18:00:00",
    address_id: 17,
    address: {
      id: 17,
      street: "Avenida dos Cravos",
      number: 987,
      complement: "Apto 505",
      neighborhood: "Vila Verde",
      city: "Cidade Q",
      state: "Estado Q",
      country: "País Q",
      zip_code: "54321-987"
    }
  },
  {
    id: 6,
    name: "TESTE",
    phone: "6677889900",
    email: "contato@bodytech.com",
    open_hour: "10:00:00",
    close_hour: "18:00:00",
    address_id: 28,
    address: {
      id: 28,
      street: "TESTE",
      number: 987,
      complement: "Apto 505",
      neighborhood: "Vila Verde",
      city: "Cidade Q",
      state: "Estado Q",
      country: "País Q",
      zip_code: "54321-987"
    }
  }
];

const newUnitSimple = {
  name: "BodyTech",
  phone: "31994778380",
  email: "contato@bodytech.com",
  open_hour: "10:00:00",
  close_hour: "18:00:00",
};

const returnNewUnitSimple = {
  id: 1,
  name: "BodyTech",
  phone: "31994778380",
  email: "contato@bodytech.com",
  open_hour: "10:00:00",
  close_hour: "18:00:00",
}

const newUnitComplete = {
  gymUnit: {
    name: "BodyTech",
    phone: "31994778380",
    email: "contato@bodytech.com",
    open_hour: "10:00:00",
    close_hour: "18:00:00",
  },
  address: {
    street: "Rua das Palmeiras",
    number: 321,
    complement: "Casa",
    neighborhood: "Jardim das Flores",
    city: "Cidade M",
    state: "Estado M",
    country: "País M",
    zip_code: "98765-432"
  }
}

const gymUnitToUpdate = {
  name: "BodyTech",
  phone: "666-um-tapa-na-orelha",
  email: "contato@bodytech.com",
  open_hour: "10:00:00",
  close_hour: "18:00:00"
};

const updatedGymUnit = {
  id: 1,
  name: "BodyTech",
  phone: "666-um-tapa-na-orelha",
  email: "contato@bodytech.com",
  open_hour: "10:00:00",
  close_hour: "18:00:00"
};

const updatedGymUnitComplete = {
  id: 1,
  name: "BodyTech",
  phone: "666-um-tapa-na-orelha",
  email: "contato@bodytech.com",
  open_hour: "10:00:00",
  close_hour: "18:00:00",
  address_id: 13,
  address: {
    id: 13,
    street: "Rua das Palmeiras",
    number: 321,
    complement: "Casa",
    neighborhood: "Jardim das Flores",
    city: "Cidade M",
    state: "Estado M",
    country: "País M",
    zip_code: "98765-432"
  },
}

const gymUnitSimpleUpdate = { phone: "666-um-tapa-na-orelha" };

const address = {
  id: 13,
  street: "Rua das Palmeiras",
  number: 321,
  complement: "Casa",
  neighborhood: "Jardim das Flores",
  city: "Cidade M",
  state: "Estado M",
  country: "País M",
  zip_code: "98765-432"
};

export default {
  allUnits,
  newUnitSimple,
  newUnitComplete,
  returnNewUnitSimple,
  gymUnitToUpdate,
  updatedGymUnit,
  gymUnitSimpleUpdate,
  address,
  updatedGymUnitComplete
};
