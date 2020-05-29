import SearchFriendRepository from '../Repository/serachFriendRepository';
import { observable } from 'mobx';

export default class SearchFriendModel {
    public static _SearchFriendModel;
    @observable private _serachFriendData;

    private constructor() {}
    public static getInstance() : SearchFriendModel {
        if(!this._SearchFriendModel) {
            this._SearchFriendModel = new SearchFriendModel();
        }
        return this._SearchFriendModel;
    }

    searchFriend(data : string) : void {
        SearchFriendRepository.searchFriend(data)
        .then((d) => {
            this._serachFriendData = d.data;
        })
        .catch((err) => {
            new Error(err);
        });
    }

    get searchFriendData() {
        return this._serachFriendData;
    }
}