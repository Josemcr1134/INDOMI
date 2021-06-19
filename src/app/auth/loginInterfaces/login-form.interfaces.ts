export interface  loginForm {
    username: string, 
    password: string,
   city: string,
}

export class city {
    constructor(
      public  id: 2,
      public name: string,
      public state_code: string,
      public  country_code: string
    ){

    }
   
}