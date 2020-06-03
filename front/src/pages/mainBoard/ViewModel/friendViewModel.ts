import FriendModel from "../Model/friendModel";

class FriendViewModel {
    private _FriendModel : FriendModel;

    constructor () { 
        this._FriendModel = FriendModel.getInstance();
    }
    
    public getFriendList() : any {
        return this._FriendModel.getFriendList;
    }

    get getMyInfo() : any {
        return this._FriendModel.getMyInfo;
    }
}
export default new FriendViewModel();