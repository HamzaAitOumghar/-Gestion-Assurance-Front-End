import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from './authentification.service';



@Injectable()
export class StatistiqueService{

  
  constructor(
    private http: Http,private auth:AuthentificationService
  ) { }

  getOptions(){
    let myHeader = new Headers({'authorization':this.auth.loadToken()});
    let options = new RequestOptions({ headers: myHeader});
    return options;
  }


      public getStateClient(){
        return  this.http.get("http://localhost:8080/statistique/statusClient",this.getOptions()).map(
            resp=>resp.json()
        );
      }
      public getStateContrat(){
        return  this.http.get("http://localhost:8080/statistique/statesContrat",this.getOptions()).map(
            resp=>resp.json()
        );
      }
      public getEvolutionContratAuto(){
          return this.http.get("http://localhost:8080/statistique/evolutionContratAuto",this.getOptions()).map(
            resp=>resp.json()
          );
      }
      public getEvolutionContratHabitation(){
        return this.http.get("http://localhost:8080/statistique/evolutionContratHabitation",this.getOptions()).map(
          resp=>resp.json()
        );
    }
    public getEvolutionContratSante(){
        return this.http.get("http://localhost:8080/statistique/evolutionContratHabitation",this.getOptions()).map(
          resp=>resp.json()
        );
    }
    
}