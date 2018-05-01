import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../../../../../../service/client.service';
import { Client } from '../../../../../entities/Client';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  form:FormGroup;
  client:Client;
  /*
=new FormGroup({
    nom:new FormControl(),
    prenom:new FormControl(),
    adresse:new FormControl(),
    ville:new FormControl(),
    numTel:new FormControl(),
    profession:new FormControl(),
    email:new FormControl(),});
  */
  constructor(private clientService:ClientService) { 
    this.form=new FormGroup({
      nom:new FormControl(),
      prenom:new FormControl(),
      adresse:new FormControl(),
      ville:new FormControl(),
      numTel:new FormControl(),
      profession:new FormControl(),
      email:new FormControl(),

      });
  } 

  ngOnInit() {
    
  }

  enregitrerClient(){
    
    this.client =new Client();
    this.client.nom=this.form.value.nom;
    this.client.prenom=this.form.value.prenom;
    this.client.adresse=this.form.value.adresse;
    this.client.ville=this.form.value.ville;
    this.client.numTel=this.form.value.numTel;
    this.client.email=this.form.value.email;
    this.client.profession=this.form.value.profession;
   // this.client=new Client(null,this.form.value.nom,this.form.value.prenom,this.form.value.adresse,this.form.value.ville,this.form.value.numTel,this.form.value.profession,this.form.value.email);
    console.log(this.client);
    this.clientService.ajouterClient(this.client).subscribe();
  
  }

}
