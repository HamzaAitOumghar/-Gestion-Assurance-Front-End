import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../../../../../../service/client.service';
import { Client } from '../../../../../entities/Client';
declare var $;
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  form:FormGroup;
  messageStyle:string="d-none";
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
    
    var client={
    nom:this.form.value.nom,
    prenom:this.form.value.prenom,
    adresse:this.form.value.adresse,
    ville:this.form.value.ville,
    numTel:this.form.value.numTel,
    email:this.form.value.email,
    profession:this.form.value.profession,
    }
 
    this.clientService.ajouterClient(client).subscribe(
        (resp:Request)=>{
          console.log("->"+JSON.stringify(resp));
        }
    );
    this.form.reset();
    this.messageStyle="alert alert-success text-center";
    $(function() {
      $(".alert").fadeTo(2000, 500).slideUp(500, function(){
        $(".alert").slideUp(500);
         });  
    }); 
   

  }
}
