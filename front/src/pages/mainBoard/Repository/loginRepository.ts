import axios, { AxiosResponse } from "axios";


export interface ILogin {
    id: string;
    password : string;
}
 
class LoginRepositroy {
    sendLoginData(loginData : {}) : Promise<AxiosResponse<ILogin>> {
        const url = 'http://localhost:5000/loginRequest'
        return axios({
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(loginData),
            url,
            method: 'post'
        });
    }
}

export default new LoginRepositroy();