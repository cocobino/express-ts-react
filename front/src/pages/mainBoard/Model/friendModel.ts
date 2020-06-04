import FriendRepositroy, { IFriendList } from '../Repository/friendRepository';
import { observable, action } from 'mobx';
import FriendVO from '../ValueObject/FriendVO';

export default class FriendModel {
    private static _FriendModel : FriendModel;
    @observable private data:any = [];
    @observable private myInfo:FriendVO = new FriendVO('','','');
    //singleton
    private constructor () {
        this.loadMyInfo();
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
        FriendRepositroy.getFriendList(sessionStorage.getItem('id'))
        .then((d : any) => {
           const len = d.data.friendList.length;
            for(let i=0; i<len; i++) {
                const Friend = JSON.parse(d.data.friendList[i]);
                this.data.push(new FriendVO(Friend.id, Friend.nickName, Friend.message));
            }
        })
        .catch((err) => {
            new Error(err);
        });
    }

    //내정보
    public loadMyInfo() : void {
        FriendRepositroy.getMyInfo(sessionStorage.getItem('id'))
        .then((d :any) => {
            this.myInfo = new FriendVO(d.data.id, d.data.name, d.data.message);
        })
        .catch((err) => {
            new Error(err);
        });
    }

    get getFriendList() : IFriendList| [] {
        return this.data;
    }

    get getMyInfo() : FriendVO {
        return this.myInfo;
    }
}