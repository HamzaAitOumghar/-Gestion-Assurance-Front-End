import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AutoService{

    constructor(
        private http: Http
      ) { }

      public ajouterContratAuto(auto){
        return this.http.post("http://localhost:8080/auto/ajouter",auto).map(
            resp=>resp.json());
      }

}