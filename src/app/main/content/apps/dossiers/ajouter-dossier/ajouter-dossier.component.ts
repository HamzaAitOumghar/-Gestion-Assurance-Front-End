import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray, FormControlName } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CompleterService, CompleterData } from 'ng2-completer';
import { ClientService } from '../../../../../../service/client.service';
import { Client } from '../../../../../entities/Client';
import { DossierService } from '../../../../../../service/dossier.service';
import { Dossier } from '../../../../../entities/Dossier';
import { SanteService } from '../../../../../../service/sante.service';
import { AutoService } from '../../../../../../service/auto.service';
import { VehiculeService } from '../../../../../../service/vehicule.service';
import { TypeContratAutoService } from '../../../../../../service/typeContratAuto.service';
import { TypeContratAuto } from '../../../../../entities/TypeContratAuto';
import { HabitationService } from '../../../../../../service/habitation.service';
import { TypeContratSante } from '../../../../../entities/TypeContratSante';
import { TypeContratHabitation } from '../../../../../entities/TypeContratHabitation';
import { TypeContratHabitationService } from '../../../../../../service/typeContratHabitation.service';
import { TypeContratSanteService } from '../../../../../../service/typeContratSante.service';
import { MarqueVehiculeService } from '../../../../../../service/marqueVehicule.service';

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
  formHabitation:FormGroup;
  
  clients:Client[];
  messageStyle:string="d-none";
  messageErrorText:string;
  marques=[]
  searchData=[];
  searchMarqueAuto=[];
  typesContratAuto:TypeContratAuto[];
  typesContratSante:TypeContratSante[];
  typesContratHabitation:TypeContratHabitation[];


  checkedList=[
    {idTypeContratAuto: 1, type: "Basic"}
  ];
  checkedList2=[
    {idTypeContratSante: 1, type: "Basic"}
  ];
  checkedList3=[
    {idTypeContratHabitation: 1, type: "Basic"}
  ];
  constructor(private clientService:ClientService,private dossierService:DossierService,private santeService:SanteService
    ,private autoService:AutoService,private vehiculeService:VehiculeService,private typesautoService:TypeContratAutoService,private habitationService:HabitationService
  ,private typehabitationService:TypeContratHabitationService,
  private typeSanteService:TypeContratSanteService
,private marqueService:MarqueVehiculeService
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
    
    this.marqueService.getAllMarqueVehicules().subscribe(
      resp=>{
        this.marques=resp;
        this.searchMarqueAuto=resp.map(a=>a.marque);

      });
    this.typesautoService.getAllTypeContratAuto().subscribe(
      resp=>{
          this.typesContratAuto=resp;      
      }

  );
  this.typeSanteService.getAllTypeContratSante().subscribe(
    resp=>{
      this.typesContratSante=resp;
    }
  );
  this.typehabitationService.getAllTypeContratHabitation().subscribe(
    resp=>{
      this.typesContratHabitation=resp;
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
      typeMoteur:new FormControl('Essence'),
      montant:new FormControl('',Validators.pattern('([0-9]*[.])?[0-9]+'))
    });
    this.formSante=new FormGroup({
      dateContrat:new FormControl('',Validators.required),
      dateFinContrat:new FormControl('',Validators.required),
      montant:new FormControl('',Validators.compose([Validators.required,
          Validators.pattern('([0-9]*[.])?[0-9]+')
      ]) )
    });

    this.formHabitation=new FormGroup({
      typeLogement:new FormControl('Maison',Validators.required),
      nbrPiece:new FormControl('',Validators.pattern("^(0|[1-9][0-9]*)$")),
      dateDebut:new FormControl('',Validators.required),
      dateFin:new FormControl('',Validators.required),
      adresseHabitation:new FormControl('',Validators.required),
      ville:new FormControl('',Validators.required),
      montant:new FormControl('',Validators.pattern('([0-9]*[.])?[0-9]+'))
    });
 
  }
  
 


  ngOnInit() {
  }

  onCheckboxChange(option, event) {
    if(event.target.checked) {
      this.checkedList.push(option);
    } else {
      for(var i=0 ; i < this.checkedList.length; i++) {
        if(this.checkedList[i].idTypeContratAuto == option.idTypeContratAuto){
          this.checkedList.splice(i,1);     
        }
      }
    }
  }

  onCheckboxChange2(option, event) {
    if(event.target.checked) {
      this.checkedList2.push(option);
    } else {
      for(var i=0 ; i < this.checkedList2.length; i++) {
        if(this.checkedList2[i].idTypeContratSante == option.idTypeContratSante){
          this.checkedList2.splice(i,1);     
        }
      }
    }
  }
  onCheckboxChange3(option, event) {
    if(event.target.checked) {
      this.checkedList3.push(option);
    } else {
      for(var i=0 ; i < this.checkedList3.length; i++) {
        if(this.checkedList3[i].idTypeContratHabitation == option.idTypeContratHabitation){
          this.checkedList3.splice(i,1);     
        }
      }
    }
  }
  enregistrer(){

     var cl:Client;
     var auto=null;
     var sante=null;
     var habitation=null;
     var idDossier;

     console.log(this.formAuto.value);
     
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
          montant:this.formAuto.value.montant,
          vehicules:{
            matriculation:this.formAuto.value.matriculation,
            marqueVehicule: this.marques.find(a=>a.marque==this.formAuto.value.marque) ,      
            nbrPlace:this.formAuto.value.nbrPlace,
            datePremierMiseService:this.formAuto.value.datePremierMiseService,
            usageVehicule:this.formAuto.value.usageVehicule,
            nbrChevaux:this.formAuto.value.nbrChevaux,
            typeMoteur:this.formAuto.value.typeMoteur
          },
        }
     }

     if(this.formSante.value.dateContrat !="" &&
     this.formSante.value.dateFinContrat!="" &&
     this.formSante.value.montant!="" ){
       sante={
        dateContrat :this.formSante.value.dateContrat,
        dateFinContrat:this.formSante.value.dateFinContrat,
        montant:this.formSante.value.montant,
        typeContrats:this.checkedList2
       }
     }
     if(this.formHabitation.value.typeLogement!="" &&
      this.formHabitation.value.nbrPiece!="" &&
      this.formHabitation.value.dateDebut!="" &&
      this.formHabitation.value.dateFin!="" &&
      this.formHabitation.value.adresseHabitation!="" &&
      this.formHabitation.value.ville!="" &&
      this.formHabitation.value.montant!=""){
          habitation={
            typeLogement:this.formHabitation.value.typeLogement,
            nbrPiece:this.formHabitation.value.nbrPiece,
            dateDebut:this.formHabitation.value.dateDebut,
            dateFin:this.formHabitation.value.dateFin,
            adresseHabitation:this.formHabitation.value.adresseHabitation,
            ville:this.formHabitation.value.ville,
            montant:this.formHabitation.value.montant,
            typeContrats:this.checkedList3

          }
      }

     let id =this.formDossier.value.client.match('\\d+')[0]!=null?this.formDossier.value.client.match('\\d+')[0]:"";
     this.formDossier.value.client=null;
     console.log(this.formDossier.value);
    this.dossierService.addDossiers(this.formDossier.value,id).subscribe(
          resp=>{
            
            this.messageStyle="alert alert-success text-center";
            this.messageErrorText="le dossier a été bien ajouté";
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
            this.messageErrorText="Erreur lors de l'ajout du dosssier";
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
                    this.messageErrorText="Contrat Santé  a été bien ajouté";
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
                    this.messageErrorText="Erreur lors de l'ajoute du Contrat Santé";
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
                  typeContrats:this.checkedList
                }
                this.autoService.ajouterContratAuto(auto2,idDossier).subscribe(
                  resp=>{
                   
                    this.messageStyle="alert alert-success text-center";
                    this.messageErrorText="Contrat Auto  a été bien ajouté";
                      $(function() {
                        $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                          $(".alert").slideUp(500);
                          });  
                      }); 
                      console.log("Auto -->");
                      

                      this.vehiculeService.ajouterVehicule(auto.vehicules,resp.idAuto).subscribe(
                        resp=>{
                          this.messageStyle="alert alert-success text-center";
                          this.messageErrorText="la véhicule a été bien ajouté";
                            $(function() {
                              $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                                $(".alert").slideUp(500);
                                });  
                            });
                        }
                        ,err=>{
                          this.messageStyle="alert alert-danger text-center";
                          this.messageErrorText="Erreur lors de l'ajout du véhicule !";
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
                    this.messageErrorText="Erreur lors de l'ajout du contrat Auto";
                      $(function() {
                        $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                          $(".alert").slideUp(500);
                          });  
                      }); 
                   
                  }
                );

              }
              if(habitation!=null){
                this.habitationService.saveContratHabitation(habitation,idDossier).subscribe(
                  resp=>{
                    this.messageStyle="alert alert-success text-center";
                    this.messageErrorText="Contrat Habitation a été bien ajouté";
                      $(function() {
                        $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                          $(".alert").slideUp(500);
                          });  
                      }); 
                  },
                  err=>{
                    this.messageStyle="alert alert-danger text-center";
                    this.messageErrorText="Erreur lors de l'ajoute du contrat Habitation";
                      $(function() {
                        $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                          $(".alert").slideUp(500);
                          });  
                      });
                  }
                )
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
