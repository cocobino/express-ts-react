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

    valid(data) : string {
        for(let i=0; i< Object.keys(data).length; i++) {
            if(!data[Object.keys(data)[i]]) {
                return 'blank'
            } 
        }
        if(data.password !== data._passwordRe){
            return 'password'
        }
        return 'success';
    }

    isDuple() {
        return this._JoinModel.isDuple;
    }
}

export default new JoinViewModel();