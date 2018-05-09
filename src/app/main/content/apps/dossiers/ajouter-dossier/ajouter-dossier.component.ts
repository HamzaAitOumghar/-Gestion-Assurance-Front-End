import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CompleterService, CompleterData } from 'ng2-completer';
import { ClientService } from '../../../../../../service/client.service';
import { Client } from '../../../../../entities/Client';
import { DossierService } from '../../../../../../service/dossier.service';

declare var $;
@Component({
  selector: 'app-ajouter-dossier',
  templateUrl: './ajouter-dossier.component.html',
  styleUrls: ['./ajouter-dossier.component.css']
})
export class AjouterDossierComponent implements OnInit {

  formDossier:FormGroup;
  formAuto:FormGroup;
  formSante:FormGroup;
  clients:Client[];
  messageStyle:string="d-none";
  messageErrorText:string;
  searchData=[];

  constructor(private clientService:ClientService,private dossierService:DossierService) {
  
    this.clientService.getClient().map(resp=>resp.json()).subscribe(
      data=>{
        this.clients=data;
        for(let c of this.clients){
          let str=c.nom+" "+c.prenom+"("+c.idClient+")";
          this.searchData.push(str);
        }
      }
    );
  
    this.formDossier=new FormGroup({
      numero:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^(0|[1-9][0-9]*)$")
      ])),
      dateCreation:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      client:new FormControl('',Validators.required)
    });
    this.formAuto=new FormGroup({
      dateEffetPolice:new FormControl(),
      dateEchange:new FormControl(),
      matriculation:new FormControl(),
      marque:new FormControl(),
      nbrPlace:new FormControl('',Validators.pattern("^(0|[1-9][0-9]*)$")),
      datePremierMiseService:new FormControl(),
      usageVehicule:new FormControl(),
      nbrChevaux:new FormControl('',Validators.pattern("^(0|[1-9][0-9]*)$")),
      typeMoteur:new FormControl('Essence')
    });
    this.formSante=new FormGroup({
      dateSante:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      montant:new FormControl('',Validators.compose([Validators.required,
          Validators.pattern('([0-9]*[.])?[0-9]+')
      ]) )
    });
 
  }
  

  ngOnInit() {
  }

  enregistrer(){

     var cl:Client;
     var test:any;

     let id =this.formDossier.value.client.match('\\d+')[0];
     this.clientService.getClientById(id).subscribe(
       resp=>{
          cl=resp;
          this.formDossier.value.client=cl;
          console.log("Form before creation"+ this.formDossier.value);
          test={
           numero:this.formDossier.value.numero,
	         status:this.formDossier.value.status,
           dateCreation:this.formDossier.value.dateCreation ,
           client:null
          }
          
       }
       ,err=>{

       },
       ()=>{

         console.log("after Succes")
        console.log(test);
        this.dossierService.addDossiers(this.formDossier.value).subscribe(
          resp=>{
            this.messageStyle="alert alert-success text-center";
            this.messageErrorText="Dossier Bient Ajouter";
              $(function() {
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                  $(".alert").slideUp(500);
                  });  
              }); 
          },
          err=>{
            this.messageStyle="alert alert-danger text-center";
            this.messageErrorText="Erreur Dans l'ajout du Dosssier";
              $(function() {
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                  $(".alert").slideUp(500);
                  });  
              }); 
          }
      );
       }
     );
     
    //  var client={
    //    nom:cl.nom,
    //    prenom:cl.prenom,
    //    adresse:cl.adresse,
    //    ville:cl.ville,
    //    numTel:cl.numTel,
    //    email:cl.email,
    //    profession:cl.profession,
    //    cin:cl.cin,
    //    dateNaissance:cl.dateNaissance
    //    }$
    
     

    
  }

}
