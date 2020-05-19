import axios, { AxiosResponse } from 'axios';

export interface IFriend {
    name:string;
    message:string;
}

export interface IFriendList {
    friend: IFriend[];
}

class FriendRepositroy {
    getFriendList() :Promise<AxiosResponse<IFriendList>> {
        const url = 'http://localhost:5000/friendList';
        return axios({
            url,
            method: 'get'
        });
    }

}

export default new FriendRepositroy();