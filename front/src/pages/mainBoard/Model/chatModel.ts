import chatRepository, { IChatList } from "../Repository/chatRepository";
import { observable } from "mobx";

export default class ChatModel {
    private static _ChatModel: ChatModel;
    @observable private data: IChatList|[] =[];

    private constructor() {
        this.loadChatList();
    }

    public static getInstance() : ChatModel{
        if(!this._ChatModel) this._ChatModel = new ChatModel;
        return this._ChatModel
    }

    private loadChatList () : void {
        chatRepository.loadChatList()
        .then((d : any) => {
            this.data = d.data;
        })
        .catch((err) => {
            new Error(err);
        });
    }

    get getChatList() : IChatList|[] {
        return this.data;
    }
}