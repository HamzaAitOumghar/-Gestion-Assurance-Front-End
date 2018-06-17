import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aside',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthentificationService,public router: Router) { }

  ngOnInit() {
  }

}
