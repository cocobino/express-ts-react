import FriendModel from "../Model/friendModel";

class SearchFriendViewModel {
    private _FriendModel:FriendModel;

    constructor() {
        this._FriendModel = FriendModel.getInstance();
    }

    loadserachFriend(id : string) {
        this._FriendModel.loadsearchFriend(id);
    }


    getSearchFriend() {
        const friend = this._FriendModel.SearchFriend;
        
        if(!friend.id) {
            return 'empty';
        }else {
            return friend.name;
        }
    }

    AddSearchFriend() {
        this._FriendModel.AddSearchFriend();
    }
}

export default new SearchFriendViewModel();