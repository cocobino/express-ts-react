import FriendModel from "../Model/friendModel";

export default class FriendViewModel {
    private static _FriendViewModel : FriendViewModel;
    private _FriendModel : FriendModel;

    //singleton
    private constructor () { this._FriendModel = FriendModel.getInstance(); }
    public static getInstance() :FriendViewModel {
        if(!this._FriendViewModel) {
            this._FriendViewModel = new FriendViewModel();
        } 
        return this._FriendViewModel;
    }

    public getFriendList() {
        return this._FriendModel.getFriendList();
    }
}