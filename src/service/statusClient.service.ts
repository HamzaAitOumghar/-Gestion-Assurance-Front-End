import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class StatusClientService{

    
    constructor(
        private http: Http
      ) { }

      public getAllStatusClient(){
        return this.http.get("http://localhost:8080/StatusClients").map(
            resp=>resp.json()
        );
    }
    public getAllStatusByLabel(label){
        return this.http.get("http://localhost:8080/StatusClients/"+label).map(
            resp=>resp.json()
        );
    }
    
}