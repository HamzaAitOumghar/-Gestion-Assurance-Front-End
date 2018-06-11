import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class TypeContratHabitationService{

    constructor(
        private http: Http
      ) { }

      public getAllTypeContratHabitation(){
        return this.http.get("http://localhost:8080/TypeHabitation").map(
            resp=>resp.json()
        );
    }
}