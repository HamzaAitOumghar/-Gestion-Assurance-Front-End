import { Dossier } from "./Dossier";
import { Vehicule } from "./Vehicule";

export class Auto {

    private _idAuto: number;
    private _dateEffetPolice: Date;
    private _dateEchange: Date;
    private _dossier: Dossier;
    private _vehicules: Vehicule;


    constructor(id: number, dateEffetPolice: Date, dateEchange: Date, dossier: Dossier) {
        this._idAuto = id;
        this._dateEffetPolice = dateEffetPolice;
        this._dateEchange = dateEchange;
        this._dossier = dossier;
    }



    /**
     * Getter vehicules
     * @return {Vehicule}
     */
	public get vehicules(): Vehicule {
		return this._vehicules;
	}

    /**
     * Setter vehicules
     * @param {Vehicule} value
     */
	public set vehicules(value: Vehicule) {
		this._vehicules = value;
	}

    
    /**
     * Getter id
     * @return {number}
     */
    public get idAuto(): number {
        return this._idAuto;
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
    public set idAuto(value: number) {
        this._idAuto = value;
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