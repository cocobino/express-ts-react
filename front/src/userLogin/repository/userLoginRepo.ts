import UserLoginVO from "../VO/userLoginVO";


 export interface IuserLogin  {
     id : string;
     password : string
 }

 export const matchUser = (userLogin : UserLoginVO | null) : boolean | null => {
     window.location.href='/mainChat';
    return true;
 }