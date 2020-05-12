import {getChatList} from '../repository/chatListRepo';
import chatListJson from './chatListJson.json';
import {observable} from 'mobx';

export default class ChatListModel {
    @observable private static _chatListModel : ChatListModel | null = null;

    private constructor() {}
    public static getInstance() {
        if(!this._chatListModel) {
            this._chatListModel = new ChatListModel();
        }
        return this._chatListModel;
    }

    getChatList(id: string) : any {
        return chatListJson;
    }
}