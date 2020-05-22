import axios, { AxiosResponse } from "axios";


export interface ILogin {
    id: string;
    password : string;
}
 
class LoginRepositroy {
    sendLoginData(loginData : ILogin) : Promise<AxiosResponse<ILogin>> {
        const url = 'http://localhost:5000/joinUser'
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