import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Client } from '../app/entities/Client';
import { SupprimerComponent } from '../app/main/content/apps/client/supprimer/supprimer.component';

@Injectable()
export class ClientService {

  constructor(
    private http: Http
  ) { }



  public getClient(){
      return   this.http.get("http://localhost:8080/clients") ;
  }

  public deleteClient(id:number){
    return this.http.delete("http://localhost:8080/clients/"+id).map(
      resp=>resp.json()
    );
  }
  public ajouterClient(client){
    console.log("Client :"+JSON.stringify(client));
    return this.http.post("http://localhost:8080/ajouterClient",client).map(
      resp=>resp.json());
   
  }
  public modifierClient(id:number,client:Client){
    return this.http.put("http://localhost:8080//clients/"+id,client).map(
      resp=>resp.json()
    );
  }
  public getClientById(id){
    return   this.http.get("http://localhost:8080/clients/"+id).map(
      resp=>resp.json()
    ) ;

}


}