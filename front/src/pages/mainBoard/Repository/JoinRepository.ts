import axios, {AxiosResponse} from 'axios';

export interface IJoin {
    id : string;
    password : string;
    nickName : string;
}

class JoinRepository {
    joinRequest(user : IJoin) :Promise<AxiosResponse<boolean>>{
        const url:string ='http://localhost:5000/joinUser';

        return axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            url,
            data: JSON.stringify(user)
        });
    }
}

export default new JoinRepository();