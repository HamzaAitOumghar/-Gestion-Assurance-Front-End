import { Dossier } from "./Dossier";


export class Habitation{


    private  _idContratHabitation:number;
	private  _typeLogement:string;
	private  _nbrPiece:number;
	private  _dateDebut:Date;
	private  _dateFin:Date;
	private  _adresseHabitation:string;
	private  _ville:string;
	private  _montant:number;
    private _dossier:Dossier[];



    /**
     * Getter idContratHabitation
     * @return {number}
     */
	public get idContratHabitation(): number {
		return this._idContratHabitation;
	}

    /**
     * Getter typeLogement
     * @return {string}
     */
	public get typeLogement(): string {
		return this._typeLogement;
	}

    /**
     * Getter nbrPiece
     * @return {number}
     */
	public get nbrPiece(): number {
		return this._nbrPiece;
	}

    /**
     * Getter dateDebut
     * @return {Date}
     */
	public get dateDebut(): Date {
		return this._dateDebut;
	}

    /**
     * Getter dateFin
     * @return {Date}
     */
	public get dateFin(): Date {
		return this._dateFin;
	}

    /**
     * Getter adresseHabitation
     * @return {string}
     */
	public get adresseHabitation(): string {
		return this._adresseHabitation;
	}

    /**
     * Getter ville
     * @return {string}
     */
	public get ville(): string {
		return this._ville;
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
     * @return {Dossier[]}
     */
	public get dossier(): Dossier[] {
		return this._dossier;
	}

    /**
     * Setter idContratHabitation
     * @param {number} value
     */
	public set idContratHabitation(value: number) {
		this._idContratHabitation = value;
	}

    /**
     * Setter typeLogement
     * @param {string} value
     */
	public set typeLogement(value: string) {
		this._typeLogement = value;
	}

    /**
     * Setter nbrPiece
     * @param {number} value
     */
	public set nbrPiece(value: number) {
		this._nbrPiece = value;
	}

    /**
     * Setter dateDebut
     * @param {Date} value
     */
	public set dateDebut(value: Date) {
		this._dateDebut = value;
	}

    /**
     * Setter dateFin
     * @param {Date} value
     */
	public set dateFin(value: Date) {
		this._dateFin = value;
	}

    /**
     * Setter adresseHabitation
     * @param {string} value
     */
	public set adresseHabitation(value: string) {
		this._adresseHabitation = value;
	}

    /**
     * Setter ville
     * @param {string} value
     */
	public set ville(value: string) {
		this._ville = value;
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
     * @param {Dossier[]} value
     */
	public set dossier(value: Dossier[]) {
		this._dossier = value;
	}
    

    

}