import axios, { AxiosResponse } from 'axios';

export interface IChat {
    title : string;
    preview : string;
    time : string;
}

export interface IChatList {
    chatList : IChat[];
}

class ChatRepository {
    loadChatList():Promise<AxiosResponse<IChatList>> {
        const url = 'http://localhost:5000/chatList';
        return axios({
            url,
            method:'post'
        });
    }


    loadChatData(from:string|null, to:string):Promise<AxiosResponse<IChatList>> {
        const url = 'http://localhost:5000/chatData';
        return axios({
            url,
            method:'post',
            data:{'from':from, 'to':to}
        });
    }
}

export default new ChatRepository();