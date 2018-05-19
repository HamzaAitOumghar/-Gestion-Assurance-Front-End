import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AutoService{

    constructor(
        private http: Http
      ) { }

      public ajouterContratAuto(auto,idDossier){
        return this.http.post("http://localhost:8080/auto/ajouter/"+idDossier,auto).map(
            resp=>resp.json());
      }

      public getAllContratAuto(){
          return this.http.get("http://localhost:8080/auto").map(
            resp=>resp.json()
          );
      }
      public getAllContratAutoInDossier(idDossier){
        return this.http.get("http://localhost:8080/auto/"+idDossier).map(
          resp=>resp.json()
        );
    }
      public deleteContratAuto(id){
          return this.http.delete("http://localhost:8080/auto/delete/"+id).map(
              resp=>resp.json()
          )
      }
      public modifierContratAuto(id,auto){
        return this.http.put("http://localhost:8080/auto/modifier/"+id,auto).map(
            resp=>resp.json()
        )
    }

}