import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { Transactions } from "./transactions.model";

export interface ChargeDrawBacks{
     count: number,
     results: DrawBacks[] 
}


export class DrawBacks  {
    constructor(
        public id : string,
        public transaction : Transactions,
        public phone: string, 
        public doc_number: string, 
        public status: number,
        public observation: string, 
        public total: string,
        public pay_at : string,
        public paid_by: string
    ){}
}

export function getStatus(status: number): string{

    switch (status) {
        case 1:
            return 'Pendiente'
        case 2:
            return 'Completado'
        case 3:
            return 'Rechazado'
    
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