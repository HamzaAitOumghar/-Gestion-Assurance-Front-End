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

}