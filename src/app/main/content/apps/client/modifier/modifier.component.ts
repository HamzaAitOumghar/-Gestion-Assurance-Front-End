import { NgModule,Component, OnInit, Input, AfterViewInit,AfterContentInit } from '@angular/core';
import { Client } from '../../../../../entities/Client';
import { ClientService } from '../../../../../../service/client.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit ,AfterViewInit{

   form:FormGroup;

  @Input() client:Client;
  constructor(private serviceClient:ClientService) { 
  
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
   
  
  }
  ngOnChanges(){
    this.form=new FormGroup({
      nom:new FormControl(this.client.nom),
      prenom:new FormControl(this.client.prenom),
      adresse:new FormControl(this.client.adresse),
      ville:new FormControl(this.client.ville),
      numTel:new FormControl(this.client.numTel),
      profession:new FormControl(this.client.profession),
      email:new FormControl(this.client.email),
  });
  }
 
  

  
  
   public modifierClient(){
        this.client.nom=this.form.value.nom;
        this.client.prenom=this.form.value.prenom;
        this.client.adresse=this.form.value.adresse;
        this.client.ville=this.form.value.ville;
        this.client.numTel=this.form.value.numTel;
        this.client.profession=this.form.value.profession;
        this.client.email=this.form.value.email;
        this.serviceClient.modifierClient(this.client.idClient,this.client).subscribe(

    );

   }
}
