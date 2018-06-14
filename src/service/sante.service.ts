import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from './authentification.service';



@Injectable()
export class SanteService{

    constructor(
        private http: Http,private auth:AuthentificationService
      ) { }
    
      getOptions(){
        let myHeader = new Headers({'authorization':this.auth.loadToken()});
        let options = new RequestOptions({ headers: myHeader});
        return options;
      }

    
      public ajouterContratSante(sante,idDossier){
        return this.http.post("http://localhost:8080/Sante/ajouter/"+idDossier,sante,this.getOptions()).map(
            resp=>resp.json());
      }
    public getAllContratSante(){
        return this.http.get("http://localhost:8080/Sante",this.getOptions()).map(
            resp=>resp.json()
        );
    }
    public getAllContratSanteInDossier(idDossier){
        return this.http.get("http://localhost:8080/Sante/"+idDossier,this.getOptions()).map(
            resp=>resp.json()
        );
    }

    public modifierContratSante(idSante,sante){
        return this.http.put("http://localhost:8080/Sante/modifier/"+idSante,sante,this.getOptions()).map(
            resp=>resp.json());
    }
    public deleteContratSante(idSante){
        return this.http.delete("http://localhost:8080/Sante/delete/"+idSante,this.getOptions()).map(
            resp=>resp.json());
    }
    



}