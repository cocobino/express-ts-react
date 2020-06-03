import axios, { AxiosResponse } from 'axios';

export interface IFriend {
    id:string;
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

    getMyInfo(id:string|null) :Promise<AxiosResponse<IFriendList>> {
        const url = 'http://localhost:5000/myInfo';
        return axios({
            url,
            method: 'post',
            data: {'id':id}
        });
    }

}

export default new FriendRepositroy();