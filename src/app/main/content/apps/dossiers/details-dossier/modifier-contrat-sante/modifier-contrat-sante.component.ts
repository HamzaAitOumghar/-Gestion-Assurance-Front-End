import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sante } from '../../../../../../entities/Sante';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SanteService } from '../../../../../../../service/sante.service';

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
  

  constructor(private santeService:SanteService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.formSante=new FormGroup({
      dateContrat:new FormControl(this.sante.dateContrat,Validators.required),
      status:new FormControl(this.sante.status,Validators.required),
      montant:new FormControl(this.sante.montant,Validators.compose([Validators.required,
          Validators.pattern('([0-9]*[.])?[0-9]+')
      ]) )
    });
  }

  modifierContratSante(){
      this.santeService.modifierContratSante(this.sante.numContratSante,this.formSante.value).subscribe(
          resp=>{
              console.log("Hamza");
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
