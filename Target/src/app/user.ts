export class User{
    

    constructor(
        userID:number,
        name:string,
        surname:string,
        username:string,
        password:string,
        phoneNumber:string
    ){}
    userID:number;
    name:string;
    surname:string;
    username:string;
    password:string;
    phoneNumber:string;
} 
export interface IUser{
    userID:number,
    name:string,
    surname:string,
    username:string,
    password:string,
    phoneNumber:string
}

export class singleUser{

    userID:number;
    name:string;
    surname:string;
    username:string;
    password:string;
    phoneNumber:string;

    constructor(response:any){
        this.userID= response.userID;
        this.name= response.name;
        this.surname= response.surname;
        this.username= response.username;
        this.password= response.password;
        this.phoneNumber= response.phoneNumber;
    }
    
}