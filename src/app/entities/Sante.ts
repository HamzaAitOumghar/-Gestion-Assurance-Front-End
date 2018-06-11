import { Dossier } from "./Dossier";
import { TypeContratSante } from "./TypeContratSante";

export class Sante {

    private _numContratSante: number;
    private _dateContrat: Date;
    private _dateFinContrat: Date;
    private _montant: number;

    private _typeContrats:TypeContratSante[] ;

    /**
     * Getter dateFinContrat
     * @return {Date}
     */
	public get dateFinContrat(): Date {
		return this._dateFinContrat;
	}

    /**
     * Setter dateFinContrat
     * @param {Date} value
     */
	public set dateFinContrat(value: Date) {
		this._dateFinContrat = value;
	}

    /**
     * Getter typeContrats
     * @return {TypeContratSante[] }
     */
	public get typeContrats(): TypeContratSante[]  {
		return this._typeContrats;
	}

    /**
     * Setter typeContrats
     * @param {TypeContratSante[] } value
     */
	public set typeContrats(value: TypeContratSante[] ) {
		this._typeContrats = value;
	}

    /**
     * Getter numContratSante
     * @return {number}
     */
	public get numContratSante(): number {
		return this._numContratSante;
	}

    /**
     * Getter dateContrat
     * @return {Date}
     */
	public get dateContrat(): Date {
		return this._dateContrat;
	}

    

    /**
     * Getter montant
     * @return {number}
     */
	public get montant(): number {
		return this._montant;
	}

    /**
     * Getter dossier
     * @return {Dossier}
     */
	public get dossier(): Dossier {
		return this._dossier;
	}

    /**
     * Setter numContratSante
     * @param {number} value
     */
	public set numContratSante(value: number) {
		this._numContratSante = value;
	}

    /**
     * Setter dateContrat
     * @param {Date} value
     */
	public set dateContrat(value: Date) {
		this._dateContrat = value;
	}

 

    /**
     * Setter montant
     * @param {number} value
     */
	public set montant(value: number) {
		this._montant = value;
	}

    /**
     * Setter dossier
     * @param {Dossier} value
     */
	public set dossier(value: Dossier) {
		this._dossier = value;
	}
    private _dossier: Dossier;


}