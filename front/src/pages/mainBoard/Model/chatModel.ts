import chatRepository, { IChatList } from "../Repository/chatRepository";
import { observable } from "mobx";

export default class ChatModel {
    private static _ChatModel: ChatModel;
    @observable private data: IChatList|[] =[];
    @observable private personalchat;

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

    
    public loadChatData(from:string|null , to:string) : void {
        chatRepository.loadChatData(from, to)
        .then((d : any) => {
            this.personalchat = d.data;
            debugger;
        })
        .catch((err) => {
            new Error(err);
        });
    }

    get getChatList() : IChatList|[] {
        return this.data;
    }

    get getChatData() {
        return this.personalchat;
    }
}