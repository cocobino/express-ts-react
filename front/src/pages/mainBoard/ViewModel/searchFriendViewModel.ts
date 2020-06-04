import  SearchFriendModel  from "../Model/searchFriendModel";

class SearchFriendViewModel {
    private _SearchFriendModel:SearchFriendModel;

    constructor() {
        this._SearchFriendModel = SearchFriendModel.getInstance;
    }

    loadserachFriend(id : string) {
        this._SearchFriendModel.loadsearchFriend(id);
    }


    getSearchFriend() {
        const friend = this._SearchFriendModel.SearchFriend;
        
        if(!friend.id) {
            return 'empty';
        }else {
            return friend.name;
        }
    }

    AddSearchFriend() {
        this._SearchFriendModel.AddSearchFriend();
    }
}

export default new SearchFriendViewModel();