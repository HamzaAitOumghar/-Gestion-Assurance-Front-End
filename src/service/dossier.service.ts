import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthentificationService } from './authentification.service';



@Injectable()
export class DossierService {
    constructor(
        private http: Http,private auth:AuthentificationService
      ) { }
    
      getOptions(){
        let myHeader = new Headers({'authorization':this.auth.loadToken()});
        let options = new RequestOptions({ headers: myHeader});
        return options;
      }

  public addDossiers(dossier,idDossier){
    return this.http.post("http://localhost:8080/dossiers/ajouter/"+idDossier,dossier,this.getOptions()).map(
        resp=>resp.json()
    ) ;
    }

    public getDossierById(idDossier){
        return this.http.get("http://localhost:8080/dossiers/"+idDossier,this.getOptions()).map(
            resp=>resp.json()
        );
    }
    public getDossierByClientId(idClient){
        return this.http.get("http://localhost:8080/dossiers/client/"+idClient,this.getOptions()).map(
            resp=>resp.json()
        );
    }
    public getDossiers(){
      return this.http.get("http://localhost:8080/dossiers",this.getOptions()).map(
          resp=>resp.json()
      ) ;
  }

public getDetailsClient(id){
    return this.http.get("http://localhost:8080/clients/"+id,this.getOptions()).map(
        resp=>resp.json()
    ) ;
}

public supprimerDossier(id){
    return this.http.delete("http://localhost:8080/dossiers/"+id,this.getOptions()).map(
        resp=>resp.json()
    ) ;
}
public modifierDossier(dossier,id){
    return this.http.put("http://localhost:8080/dossiers/modifier/"+id,dossier,this.getOptions()).map(
        resp=>resp.json()
    )
}
 
}


