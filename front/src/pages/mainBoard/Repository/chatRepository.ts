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
            method:'get'
        });
    }
}

export default new ChatRepository();