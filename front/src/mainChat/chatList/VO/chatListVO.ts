export default class chatContent {
    private _id:string;
    private _name:string;
    private _time: string;
    private _content : string;


	constructor(id: string, name: string, time: string, content: string) {
		this._id = id;
		this._name = name;
		this._time = time;
		this._content = content;
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
     * Getter time
     * @return {string}
     */
	public get time(): string {
		return this._time;
	}

    /**
     * Setter time
     * @param {string} value
     */
	public set time(value: string) {
		this._time = value;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

}