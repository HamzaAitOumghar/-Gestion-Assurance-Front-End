import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { AutoService } from '../../../../../../../service/auto.service';
import { VehiculeService } from '../../../../../../../service/vehicule.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import { MarqueVehiculeService } from '../../../../../../../service/marqueVehicule.service';
import { TypeContratAuto } from '../../../../../../entities/TypeContratAuto';
import { TypeContratAutoService } from '../../../../../../../service/typeContratAuto.service';

declare var $;
@Component({
  selector: 'app-ajouter-contrat-auto',
  templateUrl: './ajouter-contrat-auto.component.html',
  styleUrls: ['./ajouter-contrat-auto.component.css']
})
export class AjouterContratAutoComponent implements OnInit {
  @Input() idDossier;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  searchData=[];
  marques=[];

  formAuto:FormGroup;
  messageStyle: string = "d-none";
  messageErrorText: string;
  typesContratAuto:TypeContratAuto[];


  checkedList=[
    {idTypeContratAuto: 1, type: "Basic"}
  ];

  constructor(private autoService:AutoService, private vehiculeService:VehiculeService,
            private marqueService:MarqueVehiculeService ,private typesautoService:TypeContratAutoService) {
   
      this.marqueService.getAllMarqueVehicules().subscribe(
          resp=>{
            this.marques=resp;
            this.searchData=resp.map(a=>a.marque);

          });
          this.typesautoService.getAllTypeContratAuto().subscribe(
            resp=>{
                this.typesContratAuto=resp;      
            });

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
  ngOnInit() {
    this.formAuto = new FormGroup({
      dateEffetPolice: new FormControl('', Validators.required),
      dateEchange: new FormControl('', Validators.required),
      matriculation: new FormControl('', Validators.required),
      marque: new FormControl('', Validators.required),
      nbrPlace: new FormControl('', Validators.pattern("^(0|[1-9][0-9]*)$")),
      datePremierMiseService: new FormControl('', Validators.required),
      usageVehicule: new FormControl('', Validators.required),
      nbrChevaux: new FormControl('', Validators.pattern("^(0|[1-9][0-9]*)$")),
      typeMoteur: new FormControl('', Validators.required),
      montant:new FormControl('',Validators.pattern('([0-9]*[.])?[0-9]+'))
    });
  
  }
 
  ajouterContratAuto(){
     
      var auto={
        dateEffetPolice:this.formAuto.value.dateEffetPolice,
        dateEchange:this.formAuto.value.dateEchange,
        typeContrats:this.checkedList,
        montant:this.formAuto.value.montant
    };
    var vehicules={
      matriculation:this.formAuto.value.matriculation,
      marqueVehicule: this.marques.find(a=>a.marque==this.formAuto.value.marque) ,      
      nbrPlace:this.formAuto.value.nbrPlace,
      datePremierMiseService:this.formAuto.value.datePremierMiseService,
      usageVehicule:this.formAuto.value.usageVehicule,
      nbrChevaux:this.formAuto.value.nbrChevaux,
      typeMoteur:this.formAuto.value.typeMoteur
      
    };
  
    this.autoService.ajouterContratAuto(auto,this.idDossier).subscribe(
      resp=>{
        console.log("Hamza");
        console.log(vehicules.marqueVehicule);
        
          this.vehiculeService.ajouterVehicule(vehicules,resp.idAuto).subscribe(
            resp=>{
              this.messageStyle="alert alert-success text-center";
              this.messageErrorText="Contrat Auto  a été bien ajouté";
                $(function() {
                  $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                    $(".alert").slideUp(500);
                    });  
                });
                this.refrech.emit();
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
        this.messageErrorText="Erreur lors de l'ajout du contrat auto !";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });  
          }); 
       
      }
    );
 
    }
}
