interface IAddress {
  id?: number;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: number;
}

export default IAddress;