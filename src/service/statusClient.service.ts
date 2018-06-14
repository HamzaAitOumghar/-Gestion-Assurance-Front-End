import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from './authentification.service';



@Injectable()
export class StatusClientService{

 
  constructor(
    private http: Http,private auth:AuthentificationService
  ) { }

  getOptions(){
    let myHeader = new Headers({'authorization':this.auth.loadToken()});
    let options = new RequestOptions({ headers: myHeader});
    return options;
  }

      public getAllStatusClient(){
        return this.http.get("http://localhost:8080/StatusClients",this.getOptions()).map(
            resp=>resp.json()
        );
    }
    public getAllStatusByLabel(label){
        return this.http.get("http://localhost:8080/StatusClients/"+label,this.getOptions()).map(
            resp=>resp.json()
        );
    }
    
}