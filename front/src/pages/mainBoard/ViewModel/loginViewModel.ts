import LoginModel from "../Model/loginModel";
import { ILogin } from "../Repository/loginRepository";

class LoginViewModel {
    private _LoginModel: LoginModel;

    constructor() {
        this._LoginModel = LoginModel.getInstance();
    }

    sendLoginData(loginData: {}) : boolean {
        return this._LoginModel.sendLoginData(loginData);
    }
}

export default new LoginViewModel();