import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Habitation } from '../../../../../../entities/Habitation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HabitationService } from '../../../../../../../service/habitation.service';
import { TypeContratHabitationService } from '../../../../../../../service/typeContratHabitation.service';
declare var $;
@Component({
  selector: 'app-modifier-contrat-habitation',
  templateUrl: './modifier-contrat-habitation.component.html',
  styleUrls: ['./modifier-contrat-habitation.component.css']
})
export class ModifierContratHabitationComponent implements OnInit {

  @Input() habitation: Habitation;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  formHabitation:FormGroup;
  messageStyle:string="d-none";
  messageErrorText:string;
  typesContratHabitation=[];
  checkedList3=[];
  constructor(private habitationService:HabitationService,private typehabitationService:TypeContratHabitationService ) { 
    this.typehabitationService.getAllTypeContratHabitation().subscribe(
      resp=>{
        this.typesContratHabitation=resp;
      }
    );
  }
  ngOnInit() {
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
  public checkTypeContratHabitation(id){ 
    for(let index = 0; index <this.checkedList3.length; ++index){
      if(this.checkedList3[index].idTypeContratHabitation==id){
        return true;
      }
    }
  }
  ngOnChanges() {
    
    this.formHabitation=new FormGroup({
      typeLogement:new FormControl(this.habitation.typeLogement,Validators.required),
      nbrPiece:new FormControl(this.habitation.nbrPiece,Validators.pattern("^(0|[1-9][0-9]*)$")),
      dateDebut:new FormControl(this.habitation.dateDebut,Validators.required),
      dateFin:new FormControl(this.habitation.dateFin,Validators.required),
      adresseHabitation:new FormControl(this.habitation.adresseHabitation,Validators.required),
      ville:new FormControl(this.habitation.ville,Validators.required),
      montant:new FormControl(this.habitation.montant,Validators.pattern('([0-9]*[.])?[0-9]+'))
    });
    console.log("Hmaza");
    console.log(this.habitation.typeContrats);

    this.checkedList3=this.habitation.typeContrats;

  }
  
 
 

  

  modifierContratHabitation(){
    var habi={
      typeLogement:this.formHabitation.value.typeLogement,
      nbrPiece:this.formHabitation.value.nbrPiece,
      dateDebut:this.formHabitation.value.dateDebut,
      dateFin:this.formHabitation.value.dateFin,
      adresseHabitation:this.formHabitation.value.adresseHabitation,
      ville:this.formHabitation.value.ville,
      montant:this.formHabitation.value.montant,
      typeContrats:this.checkedList3
    }

    this.habitationService.modifierContratHabitation(this.habitation.idContratHabitation,habi).subscribe(
      resp=>{
            
        this.messageStyle="alert alert-success text-center";
        this.messageErrorText="Contrat Habitation a été bien modifié";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });  
          }); 
          this.refrech.emit();          
      },
      err=>{
        this.messageStyle="alert alert-danger text-center";
        this.messageErrorText="Erreur lors du modification ";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });  
          }); 
        }

    );

  }

}
