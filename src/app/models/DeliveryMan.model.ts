import { person } from "./transactions.model";

export interface CargarDomi {
    count:number,
    results:Domi[];
}
export class Domi {
    static id(id: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public id : number,
        public username?: string,
        public first_name?: string,
        public last_name?: string,
        public photo?: string,
        public total?: string,
     

    ){

    }
}

export class BlockedDomi {
    constructor(
        public id : number,
        public username?: string,
        public first_name?: string,
        public last_name?: string,
        public photo?: string,
        public total?: string,
       

    ){

    }
    
}
export class ChargeDomiData {
    constructor(
        public    id:number,
        public domidata: DomiData,
        public person: person,
        public last_login : string,
        public is_superuser: boolean,
        public username: string,
        public first_name? ,
        public  last_name?: string,
        public  email?: string,
        public  is_staff?: boolean,
        public is_active?: boolean,
        public data_joined?: string,
        public groups?: number,
        public user_permissions?: string
    ){

    }
   
}
    
export class DomiData {
    constructor(
       public id:number,
       public doc_number: string,
       public exp_date: string,
       public doc_front: string,
       public doc_back: string,
       public pic_with_license: string,
       public license_number: string,
       public license_exp_date: string,
       public license_back: string,
       public license_front: string,
       public vehicle_type: number,
       public vehicle_plate: string,
       public vehicle_photo: string,
       public soat_expedition_date: string,
       public soat_exp_date: string,
       public soat_doc: string,
       public property_doc_front: string,
       public  property_doc_back: string,
       public  active: boolean,
       public  active_at: string,
       public user: number, 
       public active_by:number
   
    ){}
      
}

export function getVehicleType(vehicle_type: number): string{

    switch (vehicle_type) {
        case 1:
            return 'Bicicleta'
        case 2:
            return 'Moto'
        case 3:
            return 'Carro'
    
        default:
            return 'A pie';
    }
}