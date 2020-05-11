import UserLoginVO from '../VO/userLoginVO'
import {matchUser} from '../repository/userLoginRepo';
export default class UserLoginModel {
    private static _UserLoginModel : UserLoginModel | null = null;
    private _UserLoginVO : UserLoginVO | null = null;
    
    //singleton
    private constructor() {}
    public static getInstance() : UserLoginModel {
        if(!this._UserLoginModel) {
            this._UserLoginModel = new UserLoginModel();
        }

        return this._UserLoginModel;
    }

    matchUser(userLogin : UserLoginVO) : boolean | null {
        return matchUser(this._UserLoginVO);
    }   
}