import { ILogin } from "../Repository/loginRepository";

export default class LoginVO implements ILogin{
    private _id:string;
    private _password :string;
    
    constructor(id, password) {
        this._id = id;
        this._password = password;
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
    
}