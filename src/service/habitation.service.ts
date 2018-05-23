import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HabitationService {

    constructor(
        private http: Http
    ){
    }
    public getAllContratHabitation(){
        return this.http.get("http://localhost:8080/habitation").map(           
            resp=>resp.json());

    }
    public saveContratHabitation(habitation,idDossier){
        return this.http.post("http://localhost:8080/habitation//ajouter/"+idDossier,habitation)
        .map(resp=>resp.json());
    }

    public getAllContratHabitationInDossier(idDossier){
        return this.http.get("http://localhost:8080/habitation/"+idDossier).map(
          resp=>resp.json()
        );
    }
    public deleteContratHabitation(idHabitation){
        return this.http.delete("http://localhost:8080/habitation/delete/"+idHabitation).map(
            resp=>resp.json()
        );
    }
    public modifierContratHabitation(idHabitation,habitation){
        return this.http.put("http://localhost:8080/habitation/modifier/"+idHabitation,habitation).map(
            resp=>resp.json()
        );
    }




}