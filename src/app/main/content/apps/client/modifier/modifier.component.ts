import { NgModule,Component, OnInit, Input, AfterViewInit,AfterContentInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../../../../../entities/Client';
import { ClientService } from '../../../../../../service/client.service';
import {FormGroup,FormControl, Validators} from '@angular/forms';
declare var $;
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit ,AfterViewInit{

   form:FormGroup;
   messageStyle:string="d-none";
   messageErrorText:string;
   

  @Input() client:Client;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  constructor(private serviceClient:ClientService) { 
  
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
   
  
  }
  ngOnChanges(){
    this.form=new FormGroup({
      nom:new FormControl(this.client.nom,Validators.required),
      prenom:new FormControl(this.client.prenom,Validators.required),
      adresse:new FormControl(this.client.adresse),
      ville:new FormControl(this.client.ville),
      numTel:new FormControl(this.client.numTel,Validators.required),
      profession:new FormControl(this.client.profession),
      email:new FormControl(this.client.email),
      cin:new FormControl(this.client.cin,Validators.required),
      dateNaissance:new FormControl(this.client.dateNaissance,Validators.required)
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
        this.client.cin=this.form.value.cin;
        this.client.dateNaissance=this.form.value.dateNaissance;

        this.serviceClient.modifierClient(this.client.idClient,this.client).subscribe(
            res=>{
              
              this.messageStyle="alert alert-success text-center";
              this.messageErrorText="le client a été bien modifié";
                $(function() {
                  $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                    $(".alert").slideUp(500);
                    });
                      
                }); 
                this.refrech.emit();
            },
            err=>{
              this.messageStyle="alert alert-danger text-center";
              this.messageErrorText="Erreur lors de la modification du client";
                $(function() {
                  $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                    $(".alert").slideUp(500);
                    });  
                }); 
            }
        
        );

   }
}
