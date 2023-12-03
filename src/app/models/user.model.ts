import { environment } from "src/environments/environment"

const base_url = environment.base_url;

export class User {
    constructor(
        public name: string,
        public email: string,
        public isActive: boolean,
        public password?: string,
        public role?: string,
        public uid? : string,
        
        ){}


    get usersEmail(){
        return this.email;
    }

    get usersName(){
        return this.name;
    }

}