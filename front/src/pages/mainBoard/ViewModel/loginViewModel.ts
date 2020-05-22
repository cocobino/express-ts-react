import LoginModel from "../Model/loginModel";

class LoginViewModel {
    private _LoginModel: LoginModel;

    constructor() {
        this._LoginModel = LoginModel.getInstance();
    }

    sendLoginData(loginData: {}) {
        this._LoginModel.sendLoginData(loginData);
    }

    get loginState() {
        return this._LoginModel.loginState;
    }
}

export default new LoginViewModel();