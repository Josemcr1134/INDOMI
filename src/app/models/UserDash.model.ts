import { person } from "./transactions.model";

export class chargeUsers{
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: Usuario
    ){

    }
}
export class Usuario {
    constructor(
        public id: number ,
        public username: string,
        public first_name: string,
        public last_name: string,
        public photo?: string,

        public total?: string,
        public person?: person
        
    ){
        
    }
}

export class LockedUser{ 
    constructor( public id: number ,
        public photo: string,
        public username: string,
        public first_name: string,
        public last_name: string,
        public total: string,){
            
        }
}