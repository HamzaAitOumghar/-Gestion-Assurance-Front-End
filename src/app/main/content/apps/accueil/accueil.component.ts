import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chart.piecelabel.js';
import { StatistiqueService } from '../../../../../service/statistique.service';
import { AuthentificationService } from '../../../../../service/authentification.service';
import {  FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CompleterService, CompleterData } from 'ng2-completer';
import { ClientService } from '../../../../../service/client.service';
import { Client } from '../../../../entities/Client';
import { Dossier } from '../../../../entities/Dossier';
import { SanteService } from '../../../../../service/sante.service';
import { HabitationService } from '../../../../../service/habitation.service';
import { AutoService } from '../../../../../service/auto.service';
import { DossierService } from '../../../../../service/dossier.service';
import { Sante } from '../../../../entities/Sante';
import { Auto } from '../../../../entities/Auto';
import { Habitation } from '../../../../entities/Habitation';

declare var $;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  clientActive:number=0;
  clientPotentiel:number=0;

  contratStat = [];
  total:number=0;
  userdetails;
  form:FormGroup;
  searchData=[];
  clients:Client[];
  messageStyle:string="d-none";
  messageErrorText:string;

  santeContrat=[];
  autoContrat=[];
  habitationContrat=[];


  detailsClient:Client;
  monDossier:Dossier;

  constructor(private dossierService:DossierService,private statistiqueService: StatistiqueService,private clientService:ClientService,private santeService:SanteService,private habitationService:HabitationService,private autoService:AutoService,public auth:AuthentificationService) {
    this.userdetails=this.auth.userDetails().username;
    this.auth.getClientUser(this.userdetails).subscribe(
      (resp:any)=>{
        this.detailsClient=resp.client;
        this.getContratClient();
       
      }
    )
   
    this.clientService.getClient().map(resp=>resp.json()).subscribe(
      data=>{
        this.clients=data;
        for(let c of this.clients){
          let str=c.nom+" "+c.prenom+"("+c.idClient+")";
          this.searchData.push(str);
        }
      }
    );
    this.statistiqueService.getStateContrat().subscribe(
      resp => {
        this.contratStat = resp;
      }
    );
    this.form=new FormGroup({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      client:new FormControl("",Validators.required),
    });
    this.budjetSante(2018);
  }
  getContratClient(){
    if(this.detailsClient.idClient!=null){
      this.dossierService.getDossierByClientId(this.detailsClient.idClient).subscribe(
        resp=>{
 
         this.autoService.getAllContratAutoInDossier(resp.id).subscribe(
          respAuto=>{
           this.autoContrat=respAuto;
 
          });
          this.habitationService.getAllContratHabitationInDossier(resp.id).subscribe(
           respHabit=>{
             this.habitationContrat=respHabit;
           }
          );
          this.santeService.getAllContratSanteInDossier(resp.id).subscribe(
             respSante=>{
               this.santeContrat=respSante;
             }
          );
       
        
       }
      );
    }
     
   }
  statusClient() {
    var dataStatus = [];
    var labelStatus = [];
    this.statistiqueService.getStateClient().subscribe(
      resp => {
       
        for (var i = 0; i < resp.length; i++) {
          dataStatus.push(resp[i][1]);
          labelStatus.push(resp[i][0]);
        }

        this.clientActive=dataStatus[0];
        this.clientPotentiel=dataStatus[1];
        
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: dataStatus,

              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)'
              ]
            }],
            labels: labelStatus
          },
          options: {
            pieceLabel: {
              render: 'percentage',
              precision: 2
            }
          }
        });
      }
    );

  }
  serialiserState(resp,annee) {
    var datas = [];
    for (var i = 0; i < 12; i++) {
      
      for (var j = 0; j < resp.length; j++) {
        if (resp[j][0] == annee && resp[j][1] == (i + 1)) {
          datas[i] = resp[j][2];
        }
      }
      if (!datas[i]) {
        datas[i] = 0;
      }
    }
    return datas;
  }
  budjetSante(annee){
        var Months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
        var montantAuto = [];
        var montantSante = [];
        var montantHabitation = [];

        var ctx = document.getElementById("budjetContratAuto");
        var ctx2 = document.getElementById("budjetGeneral");
        
    this.statistiqueService.getBudjetAuto().subscribe(
      resp=>{
        this.statistiqueService.getBudjetSante().subscribe(
          resp2=>{
              this.statistiqueService.getBudjetHabitation().subscribe(
                resp3=>{
                  montantAuto = this.serialiserState(resp,annee);
                  montantSante= this.serialiserState(resp2,annee);
                  montantHabitation=this.serialiserState(resp3,annee);
                  var total=[];
                  for(var i=0;i<montantAuto.length;i++){
                      total[i]=montantAuto[i]+montantSante[i]+montantHabitation[i];
                  }
                  console.log(total);
                  var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                      labels: Months,
                      datasets: [{
                        label: 'Contrat Auto',
                        backgroundColor: '#f53794',
                        borderColor: '#f53794',
                        data: montantAuto,
                        fill: false,
                      },{
                        label: 'Contrat Habitation',
                        backgroundColor: '#FFFF00',
                        borderColor: '#FFFF00',
                        data: montantHabitation,
                        fill: false,
                      },
                      {
                        label: 'Contrat Sante',
                        backgroundColor: '#0000FF',
                        borderColor: '#0000FF',
                        data: montantSante,
                        fill: false,
                      }
                    ]}
                      ,
                            options: {
                              responsive: true
                            },
                            scales: {
                              yAxes: [{
                              display: true,
                              scaleLabel: {
                              display: true,
                              labelString: 'Valeur en DH'
                              }
                              }]
                              }
          
                  });
                  var myChart = new Chart(ctx2, {
                    type: 'line',
                    data: {
                      labels: Months,
                      datasets: [{
                        label: 'Evolution Budget',
                        backgroundColor: '#f53794',
                        borderColor: '#f53794',
                        data: total,
                        fill: false,
                      }
                    ]}
                      ,
                    options: {
                         responsive: true
                    },
                    scales: {
                      yAxes: [{
                      display: true,
                      scaleLabel: {
                      display: true,
                      labelString: 'Valeur en DH'
                      }
                      }]
                      }
          
                  });
                }
              )   
          }
        )
        

      }
    );
  }
  evolutionContrat(annee) {
    var Months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    var ctx = document.getElementById("contratEvolution");
    var dataAuto = [];
    var dataHabitation = [];
    var dataSante = [];

   
    this.statistiqueService.getEvolutionContratAuto().subscribe(
      resp => {
        
        dataAuto = this.serialiserState(resp,annee);
        
        this.statistiqueService.getEvolutionContratHabitation().subscribe(
          resp2 => {
                   dataHabitation = this.serialiserState(resp2,annee);
               
            this.statistiqueService.getEvolutionContratSante().subscribe(
              resp3 => {
          
                dataSante = this.serialiserState(resp3,annee);
               
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                this.total=dataAuto.reduce(reducer)+dataHabitation.reduce(reducer)+dataSante.reduce(reducer);
                
                var myChart = new Chart(ctx, {
                  type: 'line',
                  data: {
                    labels: Months,
                    datasets: [{
                      label: 'Contrat Auto',
                      backgroundColor: '#f53794',
                      borderColor: '#f53794',
                      data: dataAuto,
                      fill: false,
                    }, {
                      label: 'Contrat Sante',
                      fill: false,
                      backgroundColor: '#58595b',
                      borderColor: '#58595b',
                      data: dataSante,
                    }, {
                      label: 'Contrat Habitation',
                      fill: false,
                      backgroundColor: '#4dc9f6',
                      borderColor: '#4dc9f6',
                      data: dataHabitation,
                    }

                    ]
                  },
                  options: {
                    responsive: true,
                    tooltips: {
                      mode: 'index',
                      intersect: false,
                    },
                    hover: {
                      mode: 'nearest',
                      intersect: true
                     }
                  }
                });

              }
            );

          }

        );




      }
    );


  }
  ngAfterViewInit() {
    this.evolutionContrat(2018);
    this.budjetSante(2018);
  }
  ngOnInit() {
    
    this.statusClient();
    
  }
  onChange(event){
    this.evolutionContrat(event);
  }
  onChange2(event){
    this.budjetSante(event);
  }
  enregistrerUtilisateur(){
    let id =this.form.value.client.match('\\d+')[0]!=null?this.form.value.client.match('\\d+')[0]:"";
    var user={
      username:this.form.value.username ,
      password:this.form.value.password
    }
    this.auth.saveUser(user,id).subscribe(
      resp=>{
        this.messageStyle="alert alert-success text-center";
        this.messageErrorText="le compte à été bien créé";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });  
          }); 
        this.form.reset();
             },
      err=>{
        this.messageStyle="alert alert-danger text-center";
        this.messageErrorText=err.error.message;
        $(function() {
          $(".alert").fadeTo(2000, 500).slideUp(500, function(){
            $(".alert").slideUp(500);
            });  
        }); 
      }

    );
  }

}
