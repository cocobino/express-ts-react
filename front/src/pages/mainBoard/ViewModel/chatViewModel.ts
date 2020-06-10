import ChatModel from "../Model/chatModel";

class ChatViewModel {
    private _ChatModel : ChatModel;

    constructor() {
        this._ChatModel = ChatModel.getInstance(); 
    }

    public getChatList() : any {
        return this._ChatModel.getChatList;
    }

    public loadChatData (from:string|null, to:string) {
        this._ChatModel.loadChatData(from, to);
    }

    public getChatData() {
        return this._ChatModel.getChatData;
    }
}


export default new ChatViewModel();