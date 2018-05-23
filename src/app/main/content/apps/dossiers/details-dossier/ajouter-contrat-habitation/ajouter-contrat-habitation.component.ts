import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HabitationService } from '../../../../../../../service/habitation.service';

declare var $
@Component({
  selector: 'app-ajouter-contrat-habitation',
  templateUrl: './ajouter-contrat-habitation.component.html',
  styleUrls: ['./ajouter-contrat-habitation.component.css']
})
export class AjouterContratHabitationComponent implements OnInit {

  @Input() idDossier;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  formHabitation:FormGroup;
  messageStyle:string="d-none";
  messageErrorText:string;

  constructor(private habitationService:HabitationService) { }

  ngOnInit() {
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
  ajouterContratHabitation(){
    var habitation={
      typeLogement:this.formHabitation.value.typeLogement,
      nbrPiece:this.formHabitation.value.nbrPiece,
      dateDebut:this.formHabitation.value.dateDebut,
      dateFin:this.formHabitation.value.dateFin,
      adresseHabitation:this.formHabitation.value.adresseHabitation,
      ville:this.formHabitation.value.ville,
      montant:this.formHabitation.value.montant
    }

    this.habitationService.saveContratHabitation(habitation,this.idDossier).subscribe(
      resp=>{
            
        this.messageStyle="alert alert-success text-center";
        this.messageErrorText="Habitation Bient Ajouter";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });  
          }); 
          this.refrech.emit();   
          this.formHabitation.reset();       
      },
      err=>{
        this.messageStyle="alert alert-danger text-center";
        this.messageErrorText="Erreur Dans l'ajout d' Habitation";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });  
          }); 
        }


    );

  }

}
