import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SanteService{

    constructor(
        private http: Http
      ) { }
    
      public ajouterContratSante(sante){
        return this.http.post("http://localhost:8080/Sante/ajouter",sante).map(
            resp=>resp.json());
      }

}