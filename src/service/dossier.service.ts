import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SupprimerComponent } from '../app/main/content/apps/client/supprimer/supprimer.component';



@Injectable()
export class DossierService {

    constructor(
    private http: Http
  ) { }


  public getDossiers(){
      return this.http.get("http://localhost:8080/dossiers").map(
          resp=>resp.json()
      ) ;
  }

public getDetailsClient(id){
    return this.http.get("http://localhost:8080/dossiers/detailsClient/"+id).map(
        resp=>resp.json()
    ) ;
}
 
}


