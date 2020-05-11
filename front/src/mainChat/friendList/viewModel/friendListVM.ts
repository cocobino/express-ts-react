import FriendListModel from '../Model/friendListModel';

export default class FriendListVM {
    private static _FriendListVM : FriendListVM | null = null;
    private _FriendListModel : FriendListModel;

    private constructor() {
        this._FriendListModel = FriendListModel.getInstance();
    }

    public static getInstance() : FriendListVM {
        if(!this._FriendListVM) {
            this._FriendListVM = new FriendListVM();
        }
        return this._FriendListVM;
    }

    getFriendList(id : string) {
        return this._FriendListModel.getFriendList(id);
    }
}