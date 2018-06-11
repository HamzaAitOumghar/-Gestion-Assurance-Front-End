import { Habitation } from "./Habitation";


export class TypeContratHabitation{



    private _idTypeContratHabitation:number;
	private _type:string;
    private _contratsAuto:Habitation[];
    


    /**
     * Getter idTypeContratHabitation
     * @return {number}
     */
	public get idTypeContratHabitation(): number {
		return this._idTypeContratHabitation;
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
     * @return {Habitation[]}
     */
	public get contratsAuto(): Habitation[] {
		return this._contratsAuto;
	}

    /**
     * Setter idTypeContratHabitation
     * @param {number} value
     */
	public set idTypeContratHabitation(value: number) {
		this._idTypeContratHabitation = value;
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
     * @param {Habitation[]} value
     */
	public set contratsAuto(value: Habitation[]) {
		this._contratsAuto = value;
	}
    

}