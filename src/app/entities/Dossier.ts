export class Dossier{

  private  _idDossier:number ;
  private  _numero:number;
  private  _status:string;
  private 	_dateCreation:Date ;



	constructor(idDossier: number , numero: number, status: string, dateCreation: Date ) {
		this._idDossier = idDossier;
		this._numero = numero;
		this._status = status;
		this._dateCreation = dateCreation;
	}


    /**
     * Getter idDossier
     * @return {number }
     */
	public get idDossier(): number  {
		return this._idDossier;
	}

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
	}

    /**
     * Getter dateCreation
     * @return {Date }
     */
	public get dateCreation(): Date  {
		return this._dateCreation;
	}

    /**
     * Setter idDossier
     * @param {number } value
     */
	public set idDossier(value: number ) {
		this._idDossier = value;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
	}

    /**
     * Setter dateCreation
     * @param {Date } value
     */
	public set dateCreation(value: Date ) {
		this._dateCreation = value;
	}
	

}