import SearchFriendRepository from "../Repository/SearchFriendRepository";
import FriendVO from "../ValueObject/FriendVO";
import { observable } from "mobx";

export default class SearchFriendModel {
    public static SearchFriendModel:SearchFriendModel;
    @observable private friend:FriendVO = new FriendVO('','','');

    public static get getInstance() {
        if(!this.SearchFriendModel) {
            this.SearchFriendModel = new SearchFriendModel();
        }
        return this.SearchFriendModel;
    }

    loadsearchFriend(id:string) {
        SearchFriendRepository.loadsearchFriend(id)
        .then((d) => {
            this.friend = new FriendVO(d.data[0].id , d.data[0].nickName, d.data[0].message );
        })
        .catch((err) => {   
            new Error(err);
        });
    }

    AddSearchFriend() {
        SearchFriendRepository.AddSearchFriend(this.friend)
        .then((data) => {

        })
        .catch((err) => {

        });
    }


    get SearchFriend() {
        return this.friend;
    }
}