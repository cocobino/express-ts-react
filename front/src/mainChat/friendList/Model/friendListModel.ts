import {getFriendList} from '../repository/friendListRepo';
import {observable} from 'mobx';
import FriendJson from './friendList.json';


export default class FriendListModel {
    @observable private static _friendListModel : FriendListModel | null = null;
    
    private constructor() {}
    public static getInstance() : FriendListModel {
        if(!this._friendListModel) {
            this._friendListModel = new FriendListModel();
        }

        return this._friendListModel;
    }

    getFriendList(id :string): any {        
        return FriendJson;
    } 
}