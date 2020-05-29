import axios, { AxiosResponse } from "axios";


export interface ILogin {
    id: string;
    password : string;
}
 
class LoginRepositroy {
    sendLoginData(loginData : ILogin) : Promise<AxiosResponse<ILogin>> {
        const url:string = 'http://localhost:5000/loginUser'

        return axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            url,
            data: JSON.stringify(loginData)
        });
    }
}

export default new LoginRepositroy();