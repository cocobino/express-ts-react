import JoinRepository, { IJoin } from "../Repository/JoinRepository";

export default class JoinModel {
    public static _JoinModel: JoinModel;

    private constructor() {}
    public static get getInstance() {
        if(!this._JoinModel)this._JoinModel = new JoinModel();

        return this._JoinModel;
    }

    joinRequest(joinData : IJoin) : void {
        JoinRepository.joinRequest(joinData)
        .then((d) => {
            debugger;
            window.location.href='/login';
        })
        .catch((err) => {
            new Error(err);
        })
    }
}