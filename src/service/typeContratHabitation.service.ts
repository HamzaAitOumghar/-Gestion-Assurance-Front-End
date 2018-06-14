import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from './authentification.service';



@Injectable()
export class TypeContratHabitationService{

    constructor(
        private http: Http,private auth:AuthentificationService
      ) { }
    
      getOptions(){
        let myHeader = new Headers({'authorization':this.auth.loadToken()});
        let options = new RequestOptions({ headers: myHeader});
        return options;
      }

      public getAllTypeContratHabitation(){
        return this.http.get("http://localhost:8080/TypeHabitation",this.getOptions()).map(
            resp=>resp.json()
        );
    }
}