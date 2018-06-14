import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Client } from '../app/entities/Client';
import { SupprimerComponent } from '../app/main/content/apps/client/supprimer/supprimer.component';
import { AuthentificationService } from './authentification.service';

@Injectable()
export class ClientService {

  constructor(
    private http: Http,private auth:AuthentificationService
  ) { }

  getOptions(){
    let myHeader = new Headers({'authorization':this.auth.loadToken()});
    let options = new RequestOptions({ headers: myHeader});
    return options;
  }

  public getClient(){

      return   this.http.get("http://localhost:8080/clients",this.getOptions()) ;
  }
 

  public deleteClient(id:number){
    return this.http.delete("http://localhost:8080/clients/"+id,this.getOptions()).map(
      resp=>resp.json()
    );
  }
  public ajouterClient(client){
    return this.http.post("http://localhost:8080/ajouterClient",client,this.getOptions()).map(
      resp=>resp.json());
   
  }
  public modifierClient(id:number,client:Client){
    return this.http.put("http://localhost:8080//clients/"+id,client,this.getOptions()).map(
      resp=>resp.json()
    );
  }
  public getClientById(id){
    return   this.http.get("http://localhost:8080/clients/"+id,this.getOptions()).map(
      resp=>resp.json()
    ) ;

}


}