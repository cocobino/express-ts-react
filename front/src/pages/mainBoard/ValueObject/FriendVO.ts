export default class FriendVO {
    private _id:string;
    private _name:string;
    private _message: string;

    constructor(id, name, message) {
        this._id = id;
        this._name = name;
        this._message = message
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
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}
    

    /**
     * Getter message
     * @return {string}
     */
	public get message(): string {
		return this._message;
	}

    /**
     * Setter message
     * @param {string} value
     */
	public set message(value: string) {
		this._message = value;
	}

}