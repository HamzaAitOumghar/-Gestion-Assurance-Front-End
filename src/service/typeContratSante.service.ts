import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class TypeContratSanteService{

    constructor(
        private http: Http
      ) { }

      public getAllTypeContratSante(){
        return this.http.get("http://localhost:8080/TypeSante").map(
            resp=>resp.json()
        );
    }
}