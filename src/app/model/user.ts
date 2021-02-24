import { Roles } from "./roles";


export class User {
    id: number;
    firstName: String;
    lastName: String;
    email: String;
    userName: String;
    userType: String;
    password: String;  
    active: boolean;
    roles : Roles[];
 
    constructor () {
    }
}
