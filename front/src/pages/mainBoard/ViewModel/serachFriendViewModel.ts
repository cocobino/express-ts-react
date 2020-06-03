import SearchFriendModel from "../Model/SearchFriendModel";

class SearchFriendViewModel {
    private _searchFriendMoel : SearchFriendModel;

    constructor() {
        this._searchFriendMoel = SearchFriendModel.getInstance();
    }

    searchFriend(data : string) : void {
        this._searchFriendMoel.searchFriend(data);
    };

    SearchFriendData() {
        const data = this._searchFriendMoel.searchFriendData;
        debugger;
        if(typeof data?.id  ==='undefined') {
            return '검색결과가 없습니다.';
        }else {
            debugger;
            return data;
        }
    }
}

export default new SearchFriendViewModel();