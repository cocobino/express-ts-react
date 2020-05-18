import  FriendJson from './friendJson.json';

export default class FriendModel {
    private static _FriendModel : FriendModel;
    
    //singleton
    private constructor () {}
    public static getInstance() : FriendModel {
        if(!this._FriendModel) {
           this._FriendModel = new FriendModel();
        } 
        return this._FriendModel;
    }

    public getFriendList() {
        return FriendJson;
    }
}