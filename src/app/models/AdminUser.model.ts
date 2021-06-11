export class AdminUser {
    constructor(
        public id : string,
        public username: string,
        public first_name: string,
        public last_name: string,
        public token: string,
        public refresh: string
    ){
        
    }
}