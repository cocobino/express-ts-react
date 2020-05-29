import SearchFriendModel from "../Model/SearchFriendModel";

class SearchFriendViewModel {
    private _searchFriendMoel : SearchFriendModel;

    constructor() {
        this._searchFriendMoel = SearchFriendModel.getInstance();
    }

    searchFriend(data : string) : void {
        this._searchFriendMoel.searchFriend(data)
    };

    get SearchFriendData() {
        const data = this._searchFriendMoel.searchFriendData;
        debugger;
        return data;
    }
}

export default new SearchFriendViewModel();