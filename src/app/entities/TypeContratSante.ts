import { Sante } from "./Sante";


export class TypeContratSante{



    private _idTypeContratSante:number;
	private _type:string;
    private _contratsAuto:Sante[];
    



    /**
     * Getter idTypeContratSante
     * @return {number}
     */
	public get idTypeContratSante(): number {
		return this._idTypeContratSante;
	}

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Getter contratsAuto
     * @return {Sante[]}
     */
	public get contratsAuto(): Sante[] {
		return this._contratsAuto;
	}

    /**
     * Setter idTypeContratSante
     * @param {number} value
     */
	public set idTypeContratSante(value: number) {
		this._idTypeContratSante = value;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter contratsAuto
     * @param {Sante[]} value
     */
	public set contratsAuto(value: Sante[]) {
		this._contratsAuto = value;
	}
    
}