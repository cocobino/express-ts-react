import { IuserLogin } from "../repository/userLoginRepo";

export default class UserLoginVO {
    private _id : string;
    private _password : string;

    constructor(userlogin : IuserLogin) {
        this._id = userlogin.id;
        this._password = userlogin.password;
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