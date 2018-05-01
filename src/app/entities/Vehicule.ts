import { Auto } from "./Auto";



export class Vehicule{

	private  _idVehicule:number;
	private  _matriculation:string;
	private  _marque:string;
	private  _datePremierMiseService:Date;
	private  _puissance:string;
    private  _usageVehicule:string;
    private _auto:Auto;

    /**
     * Getter auto
     * @return {Auto}
     */
	public get auto(): Auto {
		return this._auto;
	}

    /**
     * Setter auto
     * @param {Auto} value
     */
	public set auto(value: Auto) {
		this._auto = value;
	}


    /**
     * Getter idVehicule
     * @return {number}
     */
	public get idVehicule(): number {
		return this._idVehicule;
	}

    /**
     * Getter matriculation
     * @return {string}
     */
	public get matriculation(): string {
		return this._matriculation;
	}

    /**
     * Getter marque
     * @return {string}
     */
	public get marque(): string {
		return this._marque;
	}

    /**
     * Getter datePremierMiseService
     * @return {Date}
     */
	public get datePremierMiseService(): Date {
		return this._datePremierMiseService;
	}

    /**
     * Getter puissance
     * @return {string}
     */
	public get puissance(): string {
		return this._puissance;
	}

    /**
     * Getter usageVehicule
     * @return {string}
     */
	public get usageVehicule(): string {
		return this._usageVehicule;
	}

    /**
     * Setter idVehicule
     * @param {number} value
     */
	public set idVehicule(value: number) {
		this._idVehicule = value;
	}

    /**
     * Setter matriculation
     * @param {string} value
     */
	public set matriculation(value: string) {
		this._matriculation = value;
	}

    /**
     * Setter marque
     * @param {string} value
     */
	public set marque(value: string) {
		this._marque = value;
	}

    /**
     * Setter datePremierMiseService
     * @param {Date} value
     */
	public set datePremierMiseService(value: Date) {
		this._datePremierMiseService = value;
	}

    /**
     * Setter puissance
     * @param {string} value
     */
	public set puissance(value: string) {
		this._puissance = value;
	}

    /**
     * Setter usageVehicule
     * @param {string} value
     */
	public set usageVehicule(value: string) {
		this._usageVehicule = value;
	}
    

}