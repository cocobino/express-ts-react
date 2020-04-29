import UserLoginModel from "../Model/userLoginModel";
import UserLoginVO from "../VO/userLoginVO";

export default class UserLoginVM {
    private static _userLoginVM : UserLoginVM | null = null;
    private _UserLoginModel : UserLoginModel;

    //singleton
    private constructor() {
        this._UserLoginModel = UserLoginModel.getInstance();
    }

    public static getInstance() {
        if(!this._userLoginVM) {
            this._userLoginVM = new UserLoginVM();
        }
        return this._userLoginVM;
    }

    matchUser(userLogin : UserLoginVO) : boolean | null {
        return this._UserLoginModel.matchUser(userLogin);
    }
}