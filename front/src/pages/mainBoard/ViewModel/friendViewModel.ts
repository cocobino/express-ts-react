import FriendModel from "../Model/friendModel";

class FriendViewModel {
    private _FriendModel : FriendModel;

    constructor () { 
        this._FriendModel = FriendModel.getInstance();
    }
    
    public getFriendList() : any {
        return this._FriendModel.getFriendList;
    }
}
export default new FriendViewModel();