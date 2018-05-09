import { Dossier } from "./Dossier";

export class Sante {

    private _numContratSante: number;
    private _dateContrat: Date;
    private _status: string;
    private _montant: number;


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
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
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
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
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