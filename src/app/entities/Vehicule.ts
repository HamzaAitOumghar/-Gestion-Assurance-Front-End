import { Auto } from "./Auto";
import { MarqueVehicule } from "./MarqueVehicule";



export class Vehicule {

    private _idVehicule: number;
    private _matriculation: string;
    private _marqueVehicule:MarqueVehicule;
    private _datePremierMiseService: Date;
    private _nbrPlace: number;
    private _usageVehicule: string;
    private _nbrChevaux: number;
    private _typeMoteur: string;



    /**
     * Getter marqueVehicule
     * @return {MarqueVehicule}
     */
	public get marqueVehicule(): MarqueVehicule {
		return this._marqueVehicule;
	}

    /**
     * Setter marqueVehicule
     * @param {MarqueVehicule} value
     */
	public set marqueVehicule(value: MarqueVehicule) {
		this._marqueVehicule = value;
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
     * Getter datePremierMiseService
     * @return {Date}
     */
    public get datePremierMiseService(): Date {
        return this._datePremierMiseService;
    }

    /**
     * Getter nbrPlace
     * @return {number}
     */
    public get nbrPlace(): number {
        return this._nbrPlace;
    }

    /**
     * Getter usageVehicule
     * @return {string}
     */
    public get usageVehicule(): string {
        return this._usageVehicule;
    }

    /**
     * Getter nbrChevaux
     * @return {number}
     */
    public get nbrChevaux(): number {
        return this._nbrChevaux;
    }

    /**
     * Getter typeMoteur
     * @return {string}
     */
    public get typeMoteur(): string {
        return this._typeMoteur;
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
     * Setter datePremierMiseService
     * @param {Date} value
     */
    public set datePremierMiseService(value: Date) {
        this._datePremierMiseService = value;
    }

    /**
     * Setter nbrPlace
     * @param {number} value
     */
    public set nbrPlace(value: number) {
        this._nbrPlace = value;
    }

    /**
     * Setter usageVehicule
     * @param {string} value
     */
    public set usageVehicule(value: string) {
        this._usageVehicule = value;
    }

    /**
     * Setter nbrChevaux
     * @param {number} value
     */
    public set nbrChevaux(value: number) {
        this._nbrChevaux = value;
    }

    /**
     * Setter typeMoteur
     * @param {string} value
     */
    public set typeMoteur(value: string) {
        this._typeMoteur = value;
    }


}