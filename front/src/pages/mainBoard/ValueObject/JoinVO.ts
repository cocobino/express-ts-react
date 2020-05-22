import { IJoin } from "../Repository/JoinRepository";

export default class JoinVO implements IJoin{
    private _id:string;
    private _password:string;
    private _nickName : string;

    constructor(id, password, nickName) {
        this._id=id;
        this._password=password;
        this._nickName = nickName;
    }

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Getter nickName
     * @return {string}
     */
	public get nickName(): string {
		return this._nickName;
	}

    /**
     * Setter nickName
     * @param {string} value
     */
	public set nickName(value: string) {
		this._nickName = value;
	}

}