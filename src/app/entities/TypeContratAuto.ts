import { Auto } from "./Auto";


export class TypeContratAuto{


    private _idTypeContratAuto:number;
	private _type:string;
	private _contratsAuto:Auto[];



    /**
     * Getter idTypeContratAuto
     * @return {number}
     */
	public get idTypeContratAuto(): number {
		return this._idTypeContratAuto;
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
     * @return {Auto[]}
     */
	public get contratsAuto(): Auto[] {
		return this._contratsAuto;
	}

    /**
     * Setter idTypeContratAuto
     * @param {number} value
     */
	public set idTypeContratAuto(value: number) {
		this._idTypeContratAuto = value;
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
     * @param {Auto[]} value
     */
	public set contratsAuto(value: Auto[]) {
		this._contratsAuto = value;
	}
    

    

}
