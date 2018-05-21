import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class TypeContratAutoService{

    constructor(
        private http: Http
      ) { }

      public getAllTypeContratAuto(){
        return this.http.get("http://localhost:8080/TypeAuto").map(
            resp=>resp.json()
        );
    }
}