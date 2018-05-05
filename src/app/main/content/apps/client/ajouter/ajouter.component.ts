import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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
  messageErrorText:string;
  constructor(private clientService:ClientService) { 
    this.form=new FormGroup({
      nom:new FormControl('',Validators.required),
      prenom:new FormControl('',Validators.required),
      adresse:new FormControl(),
      ville:new FormControl(),
      numTel:new FormControl('',Validators.compose([ Validators.required,Validators.pattern('\\d{10}')])),
      profession:new FormControl(),
      email:new FormControl('',this.customEmailValidator),
      dateNaissance:new FormControl('',Validators.required),
      cin:new FormControl('',Validators.required)
      });
  }
  
  private customEmailValidator(control: AbstractControl): ValidationErrors {
    if (!control.value) {
      return null;
    }
  
    return Validators.email(control);
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
    cin:this.form.value.cin,
    dateNaissance:this.form.value.dateNaissance
    }
 
    this.clientService.ajouterClient(client).subscribe(
        resp=>{
          this.messageStyle="alert alert-success text-center";
          this.messageErrorText="Client Bient Ajouter";
            $(function() {
              $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                $(".alert").slideUp(500);
                });  
            }); 
          this.form.reset();
        },
        err=>{
          this.messageStyle="alert alert-danger text-center";
          this.messageErrorText="Erreur Dans l'ajout du client";
            $(function() {
              $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                $(".alert").slideUp(500);
                });  
            }); 
        }
    );
   
   

  }
}
