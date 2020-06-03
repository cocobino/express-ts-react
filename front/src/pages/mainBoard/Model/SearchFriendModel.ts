import SearchFriendRepository from '../Repository/serachFriendRepository';
import { observable } from 'mobx';
import FriendVO from '../ValueObject/FriendVO';

export default class SearchFriendModel {
    public static _SearchFriendModel;
    @observable private _serachFriendData:FriendVO|null=null;

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
            this._serachFriendData = new FriendVO(d.data[0].id, d.data[0].nickName, d.data[0].message);
            debugger;
        })
        .catch((err) => {
            new Error(err);
        });
    }

    get searchFriendData() {
        return this._serachFriendData;
    }
}