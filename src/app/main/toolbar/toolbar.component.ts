import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    username;
  constructor(private auth:AuthentificationService,public router: Router) {
    this.username=this.auth.userDetails().username;
   }

   logout(){
     this.auth.logout();
   }
  ngOnInit() {
  }

}
