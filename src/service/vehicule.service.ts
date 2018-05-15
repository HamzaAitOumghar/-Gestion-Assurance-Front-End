import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class VehiculeService{

    constructor(
        private http: Http
      ) { }
    

      public ajouterVehicule(vehicule,idAuto){
        return this.http.post("http://localhost:8080/Vehicule/ajouter/"+idAuto,vehicule).map(
            resp=>resp.json());
      }

      public deleteVehicule(id,vehicule){
        return this.http.delete("http://localhost:8080/Vehicule/delete/"+id,vehicule).map(
            resp=>resp.json()
        )
    }
    public modifierVehicule(id,vehicule){
      return this.http.put("http://localhost:8080/Vehicule/modifier/"+id,vehicule).map(
          resp=>resp.json()
      )
  }


}