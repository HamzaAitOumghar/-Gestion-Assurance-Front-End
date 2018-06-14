import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from './authentification.service';



@Injectable()
export class VehiculeService{
    constructor(
        private http: Http,private auth:AuthentificationService
      ) { }
    
      getOptions(){
        let myHeader = new Headers({'authorization':this.auth.loadToken()});
        let options = new RequestOptions({ headers: myHeader});
        return options;
      }
    

      public ajouterVehicule(vehicule,idAuto){
        return this.http.post("http://localhost:8080/Vehicule/ajouter/"+idAuto,vehicule,this.getOptions()).map(
            resp=>resp.json());
      }

      public deleteVehicule(id,vehicule){
        return this.http.delete("http://localhost:8080/Vehicule/delete/"+id,this.getOptions()).map(
            resp=>resp.json()
        )
    }
    public modifierVehicule(id,vehicule){
      return this.http.put("http://localhost:8080/Vehicule/modifier/"+id,vehicule,this.getOptions()).map(
          resp=>resp.json()
      )
  }


}