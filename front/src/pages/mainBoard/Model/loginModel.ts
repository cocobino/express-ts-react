import { observable } from "mobx";
import axios from "axios";
import loginRepository, { ILogin } from "../Repository/loginRepository";

export default class LoginModel {
    private static _LoginModel : LoginModel;
    @observable private _isPossible : boolean = false;

    public static getInstance() :LoginModel{
        if(!this._LoginModel) this._LoginModel = new LoginModel;
        return this._LoginModel;
    }

    sendLoginData(loginData : ILogin ) {
        axios.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });

        loginRepository.sendLoginData(loginData)
        .then((d : any) => {
            this._isPossible = d.data.loginYn === 'true' ? true : false;
        })
        .catch((err) => {
            new Error(err);
        });
    }

    get loginState() {
        return this._isPossible;
    }
}