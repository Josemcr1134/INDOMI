import { Usuario } from "./UserDash.model";

export class chargePQR{
    constructor(
       public count : number,
       public next: string,
       public previous: string,
       public results: PQR
    ){

    }
}
 export class  PQRchoice{
     constructor(  
         public id: number,
        public description: string) {
         
     }
   
 }
export class PQR {
    constructor(
        public id : number,
        public pqr_detail: PQRchoice,
        public user: Usuario,
        public user_type: number,
        public username : string, 
        public email: string,
        public description: string,
        public status: number, 
        public created_at : string, 
        public completed_at : string, 
        public pqr: number
    ) {
        
    }
}
export class PQRID {
    constructor(
        public id : number,
        public status: number, 

        public user_type?: number,
        public username?: string, 
        public email?: string,
        public description?: string,
        public created_at?: string, 
        public completed_at?: string, 
        public pqr?: number
    ) {
        
    }
}
export function getUserType(user_type: number): string{

    switch (user_type) {
        case 1:
            return 'Usuario'
        case 2:
            return 'Domi'
        default:
            return 'Nada';
    }
}
export function getPQRType(user_type: number): string{

    switch (user_type) {
        case 1:
            return 'Peticiones'
        case 2:
            return 'Queja'
        case 3:
            return 'Reclamo'
        case 4:
            return 'Felicitacion'
        default:
            return 'Nada';
    }
}