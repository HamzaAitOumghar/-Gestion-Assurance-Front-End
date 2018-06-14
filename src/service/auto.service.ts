import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from './authentification.service';



@Injectable()
export class AutoService{

    constructor(
        private http: Http,private auth:AuthentificationService
      ) { }
    
      getOptions(){
        let myHeader = new Headers({'authorization':this.auth.loadToken()});
        let options = new RequestOptions({ headers: myHeader});
        return options;
      }

      public ajouterContratAuto(auto,idDossier){
        return this.http.post("http://localhost:8080/auto/ajouter/"+idDossier,auto,this.getOptions()).map(
            resp=>resp.json());
      }

      public getAllContratAuto(){
          return this.http.get("http://localhost:8080/auto",this.getOptions()).map(
            resp=>resp.json()
          );
      }
      public getAllContratAutoInDossier(idDossier){
        return this.http.get("http://localhost:8080/auto/"+idDossier,this.getOptions()).map(
          resp=>resp.json()
        );
    }
      public deleteContratAuto(id){
          return this.http.delete("http://localhost:8080/auto/delete/"+id,this.getOptions()).map(
              resp=>resp.json()
          )
      }
      public modifierContratAuto(id,auto){
        return this.http.put("http://localhost:8080/auto/modifier/"+id,auto,this.getOptions()).map(
            resp=>resp.json()
        )
    }

}