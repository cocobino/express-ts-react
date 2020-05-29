import JoinRepository, { IJoin } from "../Repository/JoinRepository";
import { observable } from "mobx";

export default class JoinModel {
    public static _JoinModel: JoinModel;
    @observable private _isDuple:boolean= false;

    private constructor() {}
    public static get getInstance() {
        if(!this._JoinModel)this._JoinModel = new JoinModel();

        return this._JoinModel;
    }

    joinRequest(joinData : IJoin) : void {
        JoinRepository.joinRequest(joinData)
        .then((d : any) => {
            if(d.data === 'duple') {
                this._isDuple = true;
            } else {
                window.location.href="/login";
            }
        })
        .catch((err) => {
            new Error(err);
        })
    }

    get isDuple() {
        return this._isDuple;
    }
}