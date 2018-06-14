import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from "./authentification.service";


@Injectable()
export class HabitationService {

    constructor(
        private http: Http,private auth:AuthentificationService
      ) { }
    
      getOptions(){
        let myHeader = new Headers({'authorization':this.auth.loadToken()});
        let options = new RequestOptions({ headers: myHeader});
        return options;
      }
    public getAllContratHabitation(){
        return this.http.get("http://localhost:8080/habitation",this.getOptions()).map(           
            resp=>resp.json());

    }
    public saveContratHabitation(habitation,idDossier){
        return this.http.post("http://localhost:8080/habitation//ajouter/"+idDossier,habitation,this.getOptions())
        .map(resp=>resp.json());
    }

    public getAllContratHabitationInDossier(idDossier){
        return this.http.get("http://localhost:8080/habitation/"+idDossier,this.getOptions()).map(
          resp=>resp.json()
        );
    }
    public deleteContratHabitation(idHabitation){
        return this.http.delete("http://localhost:8080/habitation/delete/"+idHabitation,this.getOptions()).map(
            resp=>resp.json()
        );
    }
    public modifierContratHabitation(idHabitation,habitation){
        return this.http.put("http://localhost:8080/habitation/modifier/"+idHabitation,habitation,this.getOptions()).map(
            resp=>resp.json()
        );
    }




}