import { environment } from "src/environments/environment"

const base_url = environment.base_url;

export class User {
    constructor(
        public name: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: string,
        public role?: string,
        public uid? : string
        ){}


    get usersEmail(){
        return this.email;
    }

    get usersName(){
        return this.name;
    }

    get imageUrl(){
        if (this.img?.includes('https')) {
            return this.img
        }

        if (this.img) {
            return `${base_url}/uploads/users/cc022292-081b-404f-a664-886cd9f035d5.jpeg`
        }else{
            return `${base_url}/uploads/users/cc022292-081b-404f-a664-886cd9f035d5.jpeg`
        }

    }
}