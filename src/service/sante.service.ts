import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SanteService{

    constructor(
        private http: Http
      ) { }
    
      public ajouterContratSante(sante,idDossier){
        return this.http.post("http://localhost:8080/Sante/ajouter/"+idDossier,sante).map(
            resp=>resp.json());
      }
    public getAllContratSante(){
        return this.http.get("http://localhost:8080/Sante").map(
            resp=>resp.json()
        );
    }
    public getAllContratSanteInDossier(idDossier){
        return this.http.get("http://localhost:8080/Sante/"+idDossier).map(
            resp=>resp.json()
        );
    }

    public modifierContratSante(idSante,sante){
        return this.http.put("http://localhost:8080/Sante/modifier/"+idSante,sante).map(
            resp=>resp.json());
    }
    public deleteContratSante(idSante){
        return this.http.delete("http://localhost:8080/Sante/delete/"+idSante).map(
            resp=>resp.json());
    }
    



}