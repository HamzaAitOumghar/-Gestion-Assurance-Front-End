import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { AutoService } from '../../../../../../../service/auto.service';
import { VehiculeService } from '../../../../../../../service/vehicule.service';
declare var $;
@Component({
  selector: 'app-ajouter-contrat-auto',
  templateUrl: './ajouter-contrat-auto.component.html',
  styleUrls: ['./ajouter-contrat-auto.component.css']
})
export class AjouterContratAutoComponent implements OnInit {
  @Input() idDossier;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  formAuto:FormGroup;
  messageStyle: string = "d-none";
  messageErrorText: string;

  constructor(private autoService:AutoService, private vehiculeService:VehiculeService) {
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
      typeMoteur: new FormControl('', Validators.required)
    });
  }
 
  ajouterContratAuto(){
    console.log("hamza ");
    console.log(this.idDossier);
    
      var auto={
        dateEffetPolice:this.formAuto.value.dateEffetPolice,
        dateEchange:this.formAuto.value.dateEchange,
    };
    var vehicules={
      matriculation:this.formAuto.value.matriculation,
      marque:this.formAuto.value.marque,      
      nbrPlace:this.formAuto.value.nbrPlace,
      datePremierMiseService:this.formAuto.value.datePremierMiseService,
      usageVehicule:this.formAuto.value.usageVehicule,
      nbrChevaux:this.formAuto.value.nbrChevaux,
      typeMoteur:this.formAuto.value.typeMoteur
    };

    this.autoService.ajouterContratAuto(auto,this.idDossier).subscribe(
      resp=>{
      
          this.vehiculeService.ajouterVehicule(vehicules,resp.idAuto).subscribe(
            resp=>{
              this.messageStyle="alert alert-success text-center";
              this.messageErrorText="Auto Bient Ajouter";
                $(function() {
                  $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                    $(".alert").slideUp(500);
                    });  
                });
                this.refrech.emit();
            }
            ,err=>{
              this.messageStyle="alert alert-danger text-center";
              this.messageErrorText="Erreur Dans Ajout Vehicule !";
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
