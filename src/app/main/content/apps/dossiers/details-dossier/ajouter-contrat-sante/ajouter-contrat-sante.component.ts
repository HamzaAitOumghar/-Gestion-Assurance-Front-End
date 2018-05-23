import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SanteService } from '../../../../../../../service/sante.service';

declare var $;
@Component({
  selector: 'app-ajouter-contrat-sante',
  templateUrl: './ajouter-contrat-sante.component.html',
  styleUrls: ['./ajouter-contrat-sante.component.css']
})
export class AjouterContratSanteComponent implements OnInit {

  @Input() idDossier;
  @Output() refrech: EventEmitter<any> = new EventEmitter();
  
  messageStyle: string = "d-none";
  messageErrorText: string;
  formSante:FormGroup;
  constructor(private santeService:SanteService) {
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

  ajouterContratSante(){
      this.santeService.ajouterContratSante(this.formSante.value,this.idDossier).subscribe(


        resp=>{
          this.messageStyle="alert alert-success text-center";
          this.messageErrorText="Sante Bient Ajouter";
            $(function() {
              $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                $(".alert").slideUp(500);
                });  
            });
            this.refrech.emit();
        }
        ,err=>{
          this.messageStyle="alert alert-danger text-center";
          this.messageErrorText="Erreur Dans Ajout Sante !";
            $(function() {
              $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                $(".alert").slideUp(500);
                });  
            }); 
        }




      );

  }
}
