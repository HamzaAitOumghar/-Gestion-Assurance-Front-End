import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sante } from '../../../../../../entities/Sante';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SanteService } from '../../../../../../../service/sante.service';
import { TypeContratSante } from '../../../../../../entities/TypeContratSante';
import { TypeContratSanteService } from '../../../../../../../service/typeContratSante.service';

declare var $;
@Component({
  selector: 'app-modifier-contrat-sante',
  templateUrl: './modifier-contrat-sante.component.html',
  styleUrls: ['./modifier-contrat-sante.component.css']
})
export class ModifierContratSanteComponent implements OnInit {

  @Input() sante:Sante;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  formSante:FormGroup;
  messageStyle: string = "d-none";
  messageErrorText: string;

  typesContratSante: TypeContratSante[];
  checkedList2=[];

  constructor(private santeService:SanteService,private typeSanteService: TypeContratSanteService) {
    this.typeSanteService.getAllTypeContratSante().subscribe(
      resp => {
        this.typesContratSante = resp;
      }
    );
   }

  ngOnInit() {
  }
  onCheckboxChange2(option, event) {
    if (event.target.checked) {
      this.checkedList2.push(option);
    } else {
      for (var i = 0; i < this.checkedList2.length; i++) {
        if (this.checkedList2[i].idTypeContratSante == option.idTypeContratSante) {
          this.checkedList2.splice(i, 1);
        }
      }
    }
  }
  typeContrat(id){
    for(let index = 0; index <this.checkedList2.length; ++index){
      if(this.checkedList2[index].idTypeContratSante==id){
        return true;
      }
    }
  }
  ngOnChanges() {
    this.formSante=new FormGroup({
      dateContrat:new FormControl(this.sante.dateContrat,Validators.required),
      dateFinContrat:new FormControl(this.sante.dateFinContrat,Validators.required),
      montant:new FormControl(this.sante.montant,Validators.compose([Validators.required,
          Validators.pattern('([0-9]*[.])?[0-9]+')
      ]) )
    });
    this.checkedList2=this.sante.typeContrats;
  }

  modifierContratSante(){
    var sante = {
      dateContrat: this.formSante.value.dateContrat,
      dateFinContrat: this.formSante.value.dateFinContrat,
      montant: this.formSante.value.montant,
      typeContrats: this.checkedList2
    }
      this.santeService.modifierContratSante(this.sante.numContratSante,sante).subscribe(
          resp=>{
              console.log(this.formSante.value);
          },
          err=>{
            this.messageStyle = "alert alert-danger text-center";
            this.messageErrorText = "Erreur Dans Modification du Contrat Sante !";
            $(function () {
              $(".alert").fadeTo(2000, 500).slideUp(500, function () {
                $(".alert").slideUp(500);
              });
            });          }
          ,()=>{
            this.messageStyle = "alert alert-success text-center";
            this.messageErrorText = "Modification Effectue !";
            $(function () {
              $(".alert").fadeTo(2000, 500).slideUp(500, function () {
                $(".alert").slideUp(500);
              });
            });
            this.refrech.emit();
          }
      );
  }

}
