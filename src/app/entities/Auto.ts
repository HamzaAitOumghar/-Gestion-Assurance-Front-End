import { Dossier } from "./Dossier";

export class Auto{
   
    private _id : number;
    private _dateEffetPolice : Date;
    private _dateEchange : Date;
    private _dossier : Dossier;



	constructor(id: number, dateEffetPolice: Date, dateEchange: Date, dossier: Dossier) {
		this._id = id;
		this._dateEffetPolice = dateEffetPolice;
		this._dateEchange = dateEchange;
		this._dossier = dossier;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter dateEffetPolice
     * @return {Date}
     */
	public get dateEffetPolice(): Date {
		return this._dateEffetPolice;
	}

    /**
     * Getter dateEchange
     * @return {Date}
     */
	public get dateEchange(): Date {
		return this._dateEchange;
	}

    /**
     * Getter dossier
     * @return {Dossier}
     */
	public get dossier(): Dossier {
		return this._dossier;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter dateEffetPolice
     * @param {Date} value
     */
	public set dateEffetPolice(value: Date) {
		this._dateEffetPolice = value;
	}

    /**
     * Setter dateEchange
     * @param {Date} value
     */
	public set dateEchange(value: Date) {
		this._dateEchange = value;
	}

    /**
     * Setter dossier
     * @param {Dossier} value
     */
	public set dossier(value: Dossier) {
		this._dossier = value;
	}
    


}