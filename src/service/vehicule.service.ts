import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class VehiculeService{

    constructor(
        private http: Http
      ) { }
    

      public ajouterVehicule(vehicule){
        return this.http.post("http://localhost:8080/Vehicule/ajouter",vehicule).map(
            resp=>resp.json());
      }

}