export interface  country {
    id,
    name: string,
    phone_code: string,
    icon: string,
    currency: string,
    status: boolean
}

export class Parameters {
    constructor(
      public  id:  number,
      public  user_tax_percent: number ,
      public  domi_tax_percent: number ,
      public  km_value: string,
      public  min_service_value: string,
      public  service_inc_dec: number,
      public  min_drawback_value: string,
      public max_debt_value: string,
      public  service_life_time: number,
      public  offer_life_time: number,
      public  refer_code_reward: string,
      public  insurance_value: string, 
      public  share_url: string, 
      public  pqr_url: string, 
      public  terms_url: string, 
      public  privacy_url: string, 
      public  frequently_url: string, 
      public  payment_url: string, 
      public  help_url: string, 
      public  reward_url: string, 
      public  about_url: string, 
      public  drawback_url: string, 
      public drawback_value: string,
      public  country:country     ){}
}
export class ChargeParameters {
    constructor(
     public   count: 1,
     public  next: null,
     public   previous: null,
     public  results: Parameters
    ){}
   
}