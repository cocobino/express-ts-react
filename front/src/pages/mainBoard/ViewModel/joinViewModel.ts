import JoinModel from "../Model/joinModel";
import { IJoin } from "../Repository/JoinRepository";

class JoinViewModel { 
    private _JoinModel: JoinModel;

    constructor() {
        this._JoinModel = JoinModel.getInstance;
    }

    joinRequest(joinData : IJoin) : void {
        this._JoinModel.joinRequest(joinData);
    }
}

export default new JoinViewModel();