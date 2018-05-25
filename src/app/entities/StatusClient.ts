export class StatusClient{

    private _idStatusClient:number;
	private _labelStatus:string;



    /**
     * Getter idStatusClient
     * @return {number}
     */
	public get idStatusClient(): number {
		return this._idStatusClient;
	}

    /**
     * Getter labelStatus
     * @return {string}
     */
	public get labelStatus(): string {
		return this._labelStatus;
	}

    /**
     * Setter idStatusClient
     * @param {number} value
     */
	public set idStatusClient(value: number) {
		this._idStatusClient = value;
	}

    /**
     * Setter labelStatus
     * @param {string} value
     */
	public set labelStatus(value: string) {
		this._labelStatus = value;
	}
    

}