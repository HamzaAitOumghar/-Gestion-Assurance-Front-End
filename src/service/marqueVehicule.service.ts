import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MarqueVehiculeService{
    constructor(
        private http: Http
      ) { }



      public getAllMarqueVehicules(){
        return this.http.get("http://localhost:8080/MarqueVehicule").map(
            resp=>resp.json()
        );
      
    }
    public getMarqueVehiculeByName(name){
        return this.http.get("http://localhost:8080/MarqueVehicule/"+name).map(
            resp=>resp.json()
        );
          
    }
}