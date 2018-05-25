
export class MarqueVehicule {


    private  _idMarqueVehicule:number;
	private  _marque:string;
    
    

    /**
     * Getter idMarqueVehicule
     * @return {number}
     */
	public get idMarqueVehicule(): number {
		return this._idMarqueVehicule;
	}

    /**
     * Getter marque
     * @return {string}
     */
	public get marque(): string {
		return this._marque;
	}

    /**
     * Setter idMarqueVehicule
     * @param {number} value
     */
	public set idMarqueVehicule(value: number) {
		this._idMarqueVehicule = value;
	}

    /**
     * Setter marque
     * @param {string} value
     */
	public set marque(value: string) {
		this._marque = value;
	}



}