import { Usuario } from "./UserDash.model"

export interface UserCity {
    name:string,
    latitude:number,
    longitude:	number,
    state_code:	string,
    country_name:	string,
    currency:	string,
}
export interface person {
    birthday: string,
    id: number,
    photo: string,
    phone: string,
    city: UserCity,
    location: string,
    reviews: number,
    stars: number,
    domi_count:number,
    available:boolean,
    user:number,
    refer_code: string
}
export class chargeTransactions{
    constructor(
        public count : number,
        public next: string,
        public previous: string,
        public results: Transactions
    ){

    }
}

export class Transactions {
    constructor(
        public total: string,
        public id: number,
       public transaction_type: number,
       public detail: number,
       public status: number,
       public timestamp : string,
       public user?: Usuario,

       
    ){
    }
    
    
}

export class TypeTransactions {
    constructor(
        public total: string,
        public id: number,
       public transaction_type: number,
       public status: number,
       public timestamp : string,
       
       public user?: Usuario,

       
    ){
    }
    
    
}

export function getDetails(detail: number): string{

    switch (detail) {
        case 1:
            return 'Recarga'
        case 2:
            return 'Servicio'
        case 3:
            return 'Tarifa'
        case 4 :
            return 'Rembolso'
        case 5 : 
            return 'Referidos'
        case 6 :
            return 'Desembolso'
    
        default:
            return 'Nada';
    }
}
export function getStatus(status: number): string{

    switch (status) {
        case 1:
            return 'Pendiente'
        case 2:
            return 'Completada'
        case 3:
            return 'Rechazada'
    
        default:
            return 'Nada';
    }
}
export function getTransactionsType(transaction_type: number): string{

    switch (transaction_type) {
        case 1:
            return 'Deposito'
        case 2:
            return 'Cobro'
        default:
            return 'Nada';
    }
}
