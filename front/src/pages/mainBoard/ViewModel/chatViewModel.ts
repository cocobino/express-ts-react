import ChatModel from "../Model/chatModel";

class ChatViewModel {
    private _ChatModel : ChatModel;

    constructor() {
        this._ChatModel = ChatModel.getInstance(); 
    }

    public getChatList() : any {
        console.log('뷰모델 채팅리스트')
        return this._ChatModel.getChatList;
    }
}


export default new ChatViewModel();