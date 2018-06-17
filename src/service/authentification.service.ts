import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


 
@Injectable()
export class AuthentificationService {

    private host: string = "http://localhost:8080";
    
    constructor(
        private http: HttpClient,public router: Router
    ) { }

    public login(user) {
        return this.http.post(this.host + "/login", user, { observe: 'response' });

    }

    public saveToken(jwt: string) {
        localStorage.setItem('token', jwt);
    }
    public loadToken(){
        return localStorage.getItem('token');
    }
    public logout(){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    public userDetails(){
        try {
            var token = this.loadToken();
            var decoded = jwt_decode(token);
            return {username:decoded.sub,role:decoded.roles} ;
          } catch(error) {
            throw new Error('Token invalid');
        }  
    }

    public isAdmin(){
      
        var decoded = this.userDetails().role;
        
        if(decoded[0].authority=="ADMIN"){
            return 0;
        }
        if(decoded[0].authority=="AGENT"){
            return 1;
        }
        else{
            return 2;
        }
    }
    public getClientUser(username){
        return this.http.get(this.host + "/userClient/"+username,{headers:{'authorization':this.loadToken()}});
    }

    public saveUser(Utilisateur,idClient){
        return this.http.post(this.host + "/register/"+idClient,Utilisateur,{headers:{'authorization':this.loadToken()}});
    }
}