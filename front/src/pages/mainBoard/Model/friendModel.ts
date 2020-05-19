import FriendRepositroy, { IFriendList } from '../Repository/friendRepository';
import { observable, action } from 'mobx';

export default class FriendModel {
    private static _FriendModel : FriendModel;
    @observable private data:IFriendList|[] = [];
    
    //singleton
    private constructor () {
        this.loadFriendList();
    }
    public static getInstance() : FriendModel {
        if(!this._FriendModel) {
           this._FriendModel = new FriendModel();
        } 
        return this._FriendModel;
    }
    
    //친구목록받아오기
    private loadFriendList() : void {
        FriendRepositroy.getFriendList()
        .then((d : any) => {
           this.data = d.data; 
        })
        .catch((err) => {
            new Error(err);
        });
    }

    get getFriendList() : IFriendList| [] {
        return this.data;
    }
}