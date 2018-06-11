import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class StatistiqueService{

    constructor(
        private http: Http
      ) { }

      public getStateClient(){
        return  this.http.get("http://localhost:8080/statistique/statusClient").map(
            resp=>resp.json()
        );
      }
      public getStateContrat(){
        return  this.http.get("http://localhost:8080/statistique/statesContrat").map(
            resp=>resp.json()
        );
      }
}