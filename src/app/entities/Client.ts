import { Dossier } from "./Dossier";

export class Client{
   
  private  _idClient:number;
  private _nom:String;
  private _prenom:String;
  private  _adresse:String;
  private  _ville:String;
  private  _numTel:String;
  private  _profession:String;
  private  _email:String;
  private _dossiers:Dossier[] ;
  
    constructor(idClient:number,nom:String,prenom:String,adresse:String,ville:String,numTel:String,profession:String,email:String){
            this._idClient=idClient;
            this._nom=nom;
            this._prenom=prenom;
            this._adresse=adresse;
            this._ville=ville;
            this._numTel=numTel;
            this._profession=profession;
            this._email=email;
    }
  


    /**
     * Getter idClient
     * @return {number}
     */
	public get idClient(): number {
		return this._idClient;
	}

    /**
     * Getter nom
     * @return {String}
     */
	public get nom(): String {
		return this._nom;
	}

    /**
     * Getter prenom
     * @return {String}
     */
	public get prenom(): String {
		return this._prenom;
	}

    /**
     * Getter adresse
     * @return {String}
     */
	public get adresse(): String {
		return this._adresse;
	}

    /**
     * Getter ville
     * @return {String}
     */
	public get ville(): String {
		return this._ville;
	}

    /**
     * Getter numTel
     * @return {String}
     */
	public get numTel(): String {
		return this._numTel;
	}

    /**
     * Getter profession
     * @return {String}
     */
	public get profession(): String {
		return this._profession;
	}

    /**
     * Getter email
     * @return {String}
     */
	public get email(): String {
		return this._email;
	}

    /**
     * Setter idClient
     * @param {number} value
     */
	public set idClient(value: number) {
		this._idClient = value;
	}

    /**
     * Setter nom
     * @param {String} value
     */
	public set nom(value: String) {
		this._nom = value;
	}

    /**
     * Setter prenom
     * @param {String} value
     */
	public set prenom(value: String) {
		this._prenom = value;
	}

    /**
     * Setter adresse
     * @param {String} value
     */
	public set adresse(value: String) {
		this._adresse = value;
	}

    /**
     * Setter ville
     * @param {String} value
     */
	public set ville(value: String) {
		this._ville = value;
	}

    /**
     * Setter numTel
     * @param {String} value
     */
	public set numTel(value: String) {
		this._numTel = value;
	}

    /**
     * Setter profession
     * @param {String} value
     */
	public set profession(value: String) {
		this._profession = value;
	}

    /**
     * Setter email
     * @param {String} value
     */
	public set email(value: String) {
		this._email = value;
	}

    /**
     * Getter dossiers
     * @return {Dossier[] }
     */
	public get dossiers(): Dossier[]  {
		return this._dossiers;
	}

    /**
     * Setter dossiers
     * @param {Dossier[] } value
     */
	public set dossiers(value: Dossier[] ) {
		this._dossiers = value;
	}
    
}

