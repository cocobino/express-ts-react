import { observable } from "mobx";
import axios from "axios";
import loginRepository, { ILogin } from "../Repository/loginRepository";
import { threadId } from "worker_threads";

export default class LoginModel {
    private static _LoginModel : LoginModel;
    @observable private _isPossible : string = '';

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
            this._isPossible = d.data ? 'success' : 'fail';
        })
        .catch((err) => {
            this._isPossible = 'fail';
            new Error(err);
        });
    }

    get loginState() {
        return this._isPossible;
    }
}