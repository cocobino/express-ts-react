import { observable } from "mobx";
import axios from "axios";
import loginRepository, { ILogin } from "../Repository/loginRepository";
import BeforeSend from '../../../common/molecules/beforeSending/beforeSend';

export default class LoginModel {
    private static _LoginModel : LoginModel;
    private static isPossible : boolean;

    public static getInstance() :LoginModel{
        if(!this._LoginModel) this._LoginModel = new LoginModel;
        return this._LoginModel;
    }

    sendLoginData(loginData : {} ) :boolean {
        axios.interceptors.request.use(function (config) {
            
            return config;
        }, function (error) {
            // 에라 나면 로딩 끄기
            return Promise.reject(error);
        });

        // 응답 인터셉터
        axios.interceptors.response.use(function (response) {
            // 응답 받으면 로딩 끄기
            alert('endSending');
            return response;
        }, function (error) {
            // 응답 에러 시에도 로딩 끄기
            return Promise.reject(error);
        });

        loginRepository.sendLoginData(loginData)
        .then((d : any) => {
            return d;
        })
        .catch((err) => {
            new Error(err);
        });

        return false;
    }

    
    
    
}