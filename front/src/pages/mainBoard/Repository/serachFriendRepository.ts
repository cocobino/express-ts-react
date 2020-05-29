import axios, { AxiosResponse } from 'axios';

class SearchFriendRepository {

    searchFriend(data) : Promise<AxiosResponse<any>>{
        const url = 'http://localhost:5000/searchFriend';
        return axios({
            url,
            method : 'post',
            data : {id : data}
        });
    }
}

export default new SearchFriendRepository();