import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode:number=0;
  constructor(public router: Router,private auth:AuthentificationService) { }

  ngOnInit() {
  }
  public onSubmitForm(f){
    this.auth.login(f).subscribe(
      resp=>{

        let jwtToken=resp.headers.get('Authorization');
        this.auth.saveToken(jwtToken);
        this.router.navigateByUrl('/accueil');
      },
      err=>{
          this.mode=1;
      }

    );
  }

}
