import { Domi } from './DeliveryMan.model';
import { Usuario } from './UserDash.model';

interface Package{
    id: number ,
    name: string,
    description: string,
    order: number
}
export interface way_points {
    address: string,
    check: boolean,
    in_way:boolean,
    location:string,
    mark: false,
    order: number,

}

export class chargeActiveServices{
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: ActiveServices
    ){

    }
}
export class ActiveServices {
    constructor(
        public id?: number,
        public user?: Usuario,
        public domi?: Domi,
        public Package?: Package,
        public way_points?: way_points,
        public service_tpye?: number,
        public offer?: string,
        public service_tax?: string,
        public domi_tax?: string, 
        public insurance_tax?: string,
        public cancel_in_place?: string,
        public observation?: string,
        public pay_method?: number, 
        public payment_status?: number,
        public  weight?: number,
        public insurance?: string, 
        public distance?: number,
        public created_at? : string,
        public service_status?: number

    ){

    }
   

}
export function getService_type(service_tpye: number): string{

    switch (service_tpye) {
        case 1:
            return 'Domicilio de comida'
        case 2:
            return 'Paqueteria'
        case 3:
            return 'Envio de documentacion'
        default:
            return 'Nada';
    }
}
export function getServiceStatus(service_status: number): string{

    switch (service_status) {
        case 1:
            return 'Pendiente'
        case 2:
            return 'Activa'
        case 3:
            return 'Cancelada'
        case 4: 
        return 'Completada'
        default:
            return 'Nada';
    }
}
export function getPayMethod(pay_method: number): string{

    switch (pay_method) {
        case 1:
            return 'Efectivo'
        case 2:
            return 'Wallet'
        case 3:
            return 'Tarjeta'
        
        default:
            return 'Nada';
    }
}