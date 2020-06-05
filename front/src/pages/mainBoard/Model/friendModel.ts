import FriendRepositroy, { IFriendList } from '../Repository/friendRepository';
import { observable, action } from 'mobx';
import FriendVO from '../ValueObject/FriendVO';
import SearchFriendRepository from '../Repository/SearchFriendRepository';

export default class FriendModel {
    private static _FriendModel : FriendModel;
    @observable private data:any = [];
    @observable private myInfo:FriendVO = new FriendVO('','','');
    @observable private friend:FriendVO = new FriendVO('','','');
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

    loadsearchFriend(id:string) {
        SearchFriendRepository.loadsearchFriend(id)
        .then((d) => {
            this.friend = new FriendVO(d.data[0].id , d.data[0].nickName, d.data[0].message );
        })
        .catch((err) => {   
            new Error(err);
        });
    }

    AddSearchFriend() {
        SearchFriendRepository.AddSearchFriend(this.friend)
        .then((d) => {
            this.loadFriendList();
        })
        .catch((err) => {

        });
    }


    get SearchFriend() {
        return this.friend;
    }


    get getFriendList() : IFriendList| [] {
        return this.data;
    }

    get getMyInfo() : FriendVO {
        return this.myInfo;
    }
}