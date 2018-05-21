import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auto } from '../../../../../../entities/Auto';
import { AutoService } from '../../../../../../../service/auto.service';
import { VehiculeService } from '../../../../../../../service/vehicule.service';
import { TypeContratAutoService } from '../../../../../../../service/typeContratAuto.service';
import { TypeContratAuto } from '../../../../../../entities/TypeContratAuto';
declare var $;
@Component({
  selector: 'app-modifier-contrat',
  templateUrl: './modifier-contrat.component.html',
  styleUrls: ['./modifier-contrat.component.css']
})
export class ModifierContratComponent implements OnInit {

  @Input() auto: Auto;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  formAuto: FormGroup;
  messageStyle: string = "d-none";
  messageErrorText: string;
  typesContratAuto:TypeContratAuto[];
  checkedList=[];
  constructor(private autoService: AutoService, private vehiculeService: VehiculeService,private typeService:TypeContratAutoService) {
    this.typeService.getAllTypeContratAuto().subscribe(
      resp=>{
        this.typesContratAuto=resp;
      }
    )
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

  ngOnChanges() {
    if (this.auto.vehicules != null) {
      this.formAuto = new FormGroup({
        dateEffetPolice: new FormControl(this.auto.dateEffetPolice, Validators.required),
        dateEchange: new FormControl(this.auto.dateEchange, Validators.required),
        matriculation: new FormControl(this.auto.vehicules.matriculation, Validators.required),
        marque: new FormControl(this.auto.vehicules.marque, Validators.required),
        nbrPlace: new FormControl(this.auto.vehicules.nbrPlace, Validators.pattern("^(0|[1-9][0-9]*)$")),
        datePremierMiseService: new FormControl(this.auto.vehicules.datePremierMiseService, Validators.required),
        usageVehicule: new FormControl(this.auto.vehicules.usageVehicule, Validators.required),
        nbrChevaux: new FormControl(this.auto.vehicules.nbrChevaux, Validators.pattern("^(0|[1-9][0-9]*)$")),
        typeMoteur: new FormControl(this.auto.vehicules.typeMoteur, Validators.required),
        montant:new FormControl(this.auto.montant,Validators.pattern('([0-9]*[.])?[0-9]+'))

      });
      this.checkedList=this.auto.typeContrats
      console.log(this.checkedList);
     
      
    }
    else {
      this.formAuto = new FormGroup({
        dateEffetPolice: new FormControl(this.auto.dateEffetPolice, Validators.required),
        dateEchange: new FormControl(this.auto.dateEchange, Validators.required),
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
    
  }

  typeContrat(id){
    for(let index = 0; index <this.checkedList.length; ++index){
      if(this.checkedList[index].idTypeContratAuto==id){
        return true;
      }
    }


  }

  modifierContrat() {
    var autoForm = {
      dateEffetPolice: this.formAuto.value.dateEffetPolice,
      dateEchange: this.formAuto.value.dateEchange,
      montant:this.formAuto.value.montant,
      vehicules: {
        matriculation: this.formAuto.value.matriculation,
        marque: this.formAuto.value.marque,
        nbrPlace: this.formAuto.value.nbrPlace,
        datePremierMiseService: this.formAuto.value.datePremierMiseService,
        usageVehicule: this.formAuto.value.usageVehicule,
        nbrChevaux: this.formAuto.value.nbrChevaux,
        typeMoteur: this.formAuto.value.typeMoteur
      }
    }

    this.autoService.modifierContratAuto(this.auto.idAuto, autoForm).subscribe(
      resp => {

      },
      err => {
        this.messageStyle = "alert alert-danger text-center";
        this.messageErrorText = "Erreur Dans Modification du Contrat Auto !";
        $(function () {
          $(".alert").fadeTo(2000, 500).slideUp(500, function () {
            $(".alert").slideUp(500);
          });
        });
      },
      () => {
        if(this.auto.vehicules==null){
          this.vehiculeService.ajouterVehicule(autoForm.vehicules,this.auto.idAuto).subscribe(
            (resp)=>{
              this.auto.vehicules=resp;
              console.log("Test !");
              console.log(resp);
            }
          );
        } 
            this.vehiculeService.modifierVehicule(this.auto.vehicules.idVehicule,autoForm.vehicules).subscribe(

              resp=>{
                this.messageStyle = "alert alert-success text-center";
                this.messageErrorText = "Contrat Bien Modifier !";
                $(function () {
                  $(".alert").fadeTo(2000, 500).slideUp(500, function () {
                    $(".alert").slideUp(500);
                  });
                });
                this.refrech.emit();
              },
              err=>{
                this.messageStyle = "alert alert-danger text-center";
                this.messageErrorText = "Erreur Dans Modification du Contrat Auto !";
                $(function () {
                  $(".alert").fadeTo(2000, 500).slideUp(500, function () {
                    $(".alert").slideUp(500);
                  });
                });
              }

            );
      }

    );

  }


}
