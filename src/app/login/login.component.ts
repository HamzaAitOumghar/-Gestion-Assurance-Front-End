import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageStyle:string="d-none";
  constructor(public router: Router,private auth:AuthentificationService) { 
  }

  ngOnInit() {
  }
  public onSubmitForm(f){
    this.auth.login(f).subscribe(
      resp=>{
        let jwtToken=resp.headers.get('Authorization');
        localStorage.removeItem('token');
        this.auth.saveToken(jwtToken);
        this.router.navigateByUrl('/accueil');
      },
      err=>{
        this.messageStyle="alert alert-danger text-center";
        $(function() {
          $(".alert").fadeTo(2000, 500).slideUp(500, function(){
            $(".alert").slideUp(500);
            });  
        });       }

    );
  }

}
