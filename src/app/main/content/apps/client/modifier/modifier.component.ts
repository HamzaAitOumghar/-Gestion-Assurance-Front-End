import { NgModule,Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../../../entities/Client';
import { ClientService } from '../../../../../../service/client.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

   form:FormGroup;

  @Input() client:Client;
   nomAA:string;
  constructor(private serviceClient:ClientService) { 
  
  }

  ngOnInit() {
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

  //  getClient(){
  //   this.serviceClient.getClientById(this.c).subscribe(
  //     data=>{
  //       this.client=data;
  //       console.log(this.client);
  //     }
  //   );
  //  }
   public modifierClient(){
     console.log(this.client);
    //   this.client=client;
      //  this.serviceClient.modifierClient(this.client.idClient,this.client).subscribe(

   // );

   }
}
