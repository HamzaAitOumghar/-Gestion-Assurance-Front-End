import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AuthentificationService {

    private host: string = "http://localhost:8080";
    
    constructor(
        private http: HttpClient
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

}