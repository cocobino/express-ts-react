import axios, { AxiosResponse } from 'axios';
import FriendVO from '../ValueObject/FriendVO';


class SearchFriendRepository {
    //친구찾기
    loadsearchFriend(id:string):Promise<AxiosResponse<FriendVO>> {
        return axios({
            method: 'post',
            url:'http://localhost:5000/searchFriend',
            data: { 'id' : id }
        })
    }

    AddSearchFriend(friend : FriendVO):Promise<AxiosResponse<FriendVO>> {
        return axios({
            method: 'post',
            url:'http://localhost:5000/addFriend',
            data: {'addFriend' : friend,
            'id' : sessionStorage.getItem('id')
            }
        })
    }
    
}

export default new SearchFriendRepository();