import ChatListModel from "../Model/chatListModel";

export default class ChatListVM {
    private static _chatListVM : ChatListVM | null = null;
    private _ChatListModel : ChatListModel;

    private constructor() { this._ChatListModel = ChatListModel.getInstance();}
    public static getInstance() {
        if(!this._chatListVM) {
            this._chatListVM = new ChatListVM();
        }
        return this._chatListVM;
    }

    getChatList() : any {
        const id = window.location.href.split('id=');
        return this._ChatListModel.getChatList(id[1]);
    }
}