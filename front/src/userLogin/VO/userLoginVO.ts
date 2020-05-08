import { IuserLogin } from "../repository/userLoginRepo";

export default class UserLoginVO {
    private _id : string;
    private _password : string;

    constructor(id:string , password: string) {
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
    
    public toString() {
        console.log(this._id, this._password);
    }
    
}