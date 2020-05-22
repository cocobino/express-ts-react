import LoginModel from "../Model/loginModel";
import { ILogin } from "../Repository/loginRepository";

class LoginViewModel {
    private _LoginModel: LoginModel;

    constructor() {
        this._LoginModel = LoginModel.getInstance();
    }

    sendLoginData(loginData: ILogin) {
        this._LoginModel.sendLoginData(loginData);
    }

    get loginState() {
        return this._LoginModel.loginState;
    }
}

export default new LoginViewModel();