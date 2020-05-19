import ChatModel from "../Model/chatModel";

class ChatViewModel {
    private _ChatModel : ChatModel;

    constructor() {
        this._ChatModel = ChatModel.getInstance(); 
    }

    public getChatList() : any {
        return this._ChatModel.getChatList;
    }
}


export default new ChatViewModel();