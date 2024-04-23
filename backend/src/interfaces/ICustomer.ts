export default interface INewCostumer {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    phone: string;
    cpf: string;
    isActive: boolean;
    address_id?: number;
};