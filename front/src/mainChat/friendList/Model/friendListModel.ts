import {getFriendList} from '../repository/friendListRepo';

export default class FriendListModel {
    private static _friendListModel : FriendListModel | null = null;
    
    private constructor() {}
    public static getInstance() : FriendListModel {
        if(!this._friendListModel) {
            this._friendListModel = new FriendListModel();
        }

        return this._friendListModel;
    }

    getFriendList(id :string):[] {        
        return getFriendList(id);
    } 
}