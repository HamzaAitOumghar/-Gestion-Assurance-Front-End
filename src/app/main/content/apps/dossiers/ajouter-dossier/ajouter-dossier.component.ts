import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CompleterService, CompleterData } from 'ng2-completer';
import { ClientService } from '../../../../../../service/client.service';
import { Client } from '../../../../../entities/Client';
import { DossierService } from '../../../../../../service/dossier.service';
import { Dossier } from '../../../../../entities/Dossier';
import { SanteService } from '../../../../../../service/sante.service';
import { AutoService } from '../../../../../../service/auto.service';
import { VehiculeService } from '../../../../../../service/vehicule.service';

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

  constructor(private clientService:ClientService,private dossierService:DossierService,private santeService:SanteService
    ,private autoService:AutoService,private vehiculeService:VehiculeService
  ) {
  
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
      dateEffetPolice:new FormControl(''),
      dateEchange:new FormControl(''),
      matriculation:new FormControl(''),
      marque:new FormControl(''),
      nbrPlace:new FormControl('',Validators.pattern("^(0|[1-9][0-9]*)$")),
      datePremierMiseService:new FormControl(''),
      usageVehicule:new FormControl(''),
      nbrChevaux:new FormControl('',Validators.pattern("^(0|[1-9][0-9]*)$")),
      typeMoteur:new FormControl('Essence')
    });
    this.formSante=new FormGroup({
      dateContrat:new FormControl('',Validators.required),
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
     var auto=null;
     var sante=null;
     var idDossier;
     
     if(this.formAuto.value.dateCreation!=""
    && this.formAuto.value.dateEffetPolice!=""      
     &&this.formAuto.value.dateEchange!=""
     &&this.formAuto.value.matriculation!=""
     &&this.formAuto.value.marque!=""      
     &&this.formAuto.value.nbrPlace!=""
     &&this.formAuto.value.datePremierMiseService!=""
     &&this.formAuto.value.usageVehicule!=""
     &&this.formAuto.value.nbrChevaux!=""
     &&this.formAuto.value.typeMoteur!=""
      ){
         auto={
          dateEffetPolice:this.formAuto.value.dateEffetPolice,
          dateEchange:this.formAuto.value.dateEchange,
          vehicules:{
            matriculation:this.formAuto.value.matriculation,
            marque:this.formAuto.value.marque,      
            nbrPlace:this.formAuto.value.nbrPlace,
            datePremierMiseService:this.formAuto.value.datePremierMiseService,
            usageVehicule:this.formAuto.value.usageVehicule,
            nbrChevaux:this.formAuto.value.nbrChevaux,
            typeMoteur:this.formAuto.value.typeMoteur
          }
        }
     }

     if(this.formSante.value.dateContrat !="" &&
     this.formSante.value.status!="" &&
     this.formSante.value.montant!="" ){
       sante={
        dateContrat :this.formSante.value.dateContrat,
        status:this.formSante.value.status,
        montant:this.formSante.value.montant
       }


     }

     let id =this.formDossier.value.client.match('\\d+')[0]!=null?this.formDossier.value.client.match('\\d+')[0]:"";
     this.formDossier.value.client=null;
     console.log(this.formDossier.value);
    this.dossierService.addDossiers(this.formDossier.value,id).subscribe(
          resp=>{
            
            this.messageStyle="alert alert-success text-center";
            this.messageErrorText="Dossier Bient Ajouter";
              $(function() {
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                  $(".alert").slideUp(500);
                  });  
              }); 
              //this.formDossier.reset();
            idDossier=resp.id;
              
          },
          err=>{
            this.messageStyle="alert alert-danger text-center";
            this.messageErrorText="Erreur Dans l'ajout du Dosssier";
              $(function() {
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                  $(".alert").slideUp(500);
                  });  
              }); 
              this.formDossier.reset();
            },()=>{

              if(sante!=null){
                console.log("id Dossier !"+idDossier);

                this.santeService.ajouterContratSante(sante,idDossier).subscribe(
                  resp=>{
                    this.messageStyle="alert alert-success text-center";
                    this.messageErrorText="Sante Bien Ajouter";
                      $(function() {
                        $(".alert").fadeTo(2000, 500).slideUp(5000, function(){
                          $(".alert").slideUp(5000);
                          });  
                      });
                      this.formDossier.reset();
                      this.formSante.reset(); 
                      console.log("Sante Ajouter ! ! !");

                  },
                  err=>{
                    this.messageStyle="alert alert-danger text-center";
                    this.messageErrorText="Erreur Dans Ajoute Du Contrat Sante";
                    $(function() {
                      $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                        $(".alert").slideUp(500);
                        });  
                    }); 
                    this.formDossier.reset();
                    this.formSante.reset();
                  }

                )
              }

              if(auto!=null){
                var auto2={
                  dateEffetPolice:this.formAuto.value.dateEffetPolice,
                  dateEchange:this.formAuto.value.dateEchange,
                }
                this.autoService.ajouterContratAuto(auto2,idDossier).subscribe(
                  resp=>{
                   
                    this.messageStyle="alert alert-success text-center";
                    this.messageErrorText="Auto Bient Ajouter";
                      $(function() {
                        $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                          $(".alert").slideUp(500);
                          });  
                      }); 
                      console.log("Auto -->");
                      

                      this.vehiculeService.ajouterVehicule(auto.vehicules,resp.idAuto).subscribe(
                        resp=>{
                          this.messageStyle="alert alert-success text-center";
                          this.messageErrorText="Vehicume Bient Ajouter";
                            $(function() {
                              $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                                $(".alert").slideUp(500);
                                });  
                            });
                        }
                        ,err=>{
                          this.messageStyle="alert alert-danger text-center";
                          this.messageErrorText="Erreur Dant Ajout Vehicule !";
                            $(function() {
                              $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                                $(".alert").slideUp(500);
                                });  
                            }); 
                        }
                      )
                  },
                  err=>{
                    this.messageStyle="alert alert-danger text-center";
                    this.messageErrorText="Erreur Dant Ajout Auto";
                      $(function() {
                        $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                          $(".alert").slideUp(500);
                          });  
                      }); 
                   
                  }
                );

              }

            }
      );
      






     //  this.clientService.getClientById(id).subscribe(
    //    resp=>{
    //       cl=resp;
    //       this.formDossier.value.client=cl;
      
    //    }
    //    ,err=>{

    //    },
    //    ()=>{

    //     this.dossierService.addDossiers(this.formDossier.value).subscribe(
    //       resp=>{
    //           console.log("3lah !");
    //           console.log(resp);

    //         this.messageStyle="alert alert-success text-center";
    //         this.messageErrorText="Dossier Bient Ajouter";
    //           $(function() {
    //             $(".alert").fadeTo(2000, 500).slideUp(500, function(){
    //               $(".alert").slideUp(500);
    //               });  
    //           }); 
              
    //           if(sante!=null){
    //             sante.dossier=resp;
    //             this.santeService.ajouterContratSante(sante).subscribe(
    //               resp=>{
    //                 this.messageStyle="alert alert-success text-center";
    //                 this.messageErrorText="Sante Bien Ajouter";
    //                   $(function() {
    //                     $(".alert").fadeTo(2000, 500).slideUp(500, function(){
    //                       $(".alert").slideUp(500);
    //                       });  
    //                   }); 
    //               },
    //               err=>{

    //               }

    //             )
    //           }
              
    //       },
    //       err=>{
    //         this.messageStyle="alert alert-danger text-center";
    //         this.messageErrorText="Erreur Dans l'ajout du Dosssier";
    //           $(function() {
    //             $(".alert").fadeTo(2000, 500).slideUp(500, function(){
    //               $(".alert").slideUp(500);
    //               });  
    //           }); 
    //       }
    //   );
    //    }
    //  );
     
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
