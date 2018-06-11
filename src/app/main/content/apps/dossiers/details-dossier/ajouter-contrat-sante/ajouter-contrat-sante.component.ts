import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SanteService } from '../../../../../../../service/sante.service';
import { TypeContratSante } from '../../../../../../entities/TypeContratSante';
import { TypeContratSanteService } from '../../../../../../../service/typeContratSante.service';

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
  formSante: FormGroup;

  checkedList2 = [
    { idTypeContratSante: 1, type: "Basic" }
  ];
  typesContratSante: TypeContratSante[];

  constructor(private santeService: SanteService, private typeSanteService: TypeContratSanteService) {
    this.typeSanteService.getAllTypeContratSante().subscribe(
      resp => {
        this.typesContratSante = resp;
      }
    );
    this.formSante = new FormGroup({
      dateContrat: new FormControl('', Validators.required),
      dateFinContrat: new FormControl('', Validators.required),
      montant: new FormControl('', Validators.compose([Validators.required, Validators.pattern('([0-9]*[.])?[0-9]+')]))
    });
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
  ajouterContratSante() {
    var sante = {
      dateContrat: this.formSante.value.dateContrat,
      dateFinContrat: this.formSante.value.dateFinContrat,
      montant: this.formSante.value.montant,
      typeContrats: this.checkedList2
    }
    this.santeService.ajouterContratSante(sante, this.idDossier).subscribe(


      resp => {
        this.messageStyle = "alert alert-success text-center";
        this.messageErrorText = "Sante Bient Ajouter";
        $(function () {
          $(".alert").fadeTo(2000, 500).slideUp(500, function () {
            $(".alert").slideUp(500);
          });
        });
        this.refrech.emit();
      }
      , err => {
        this.messageStyle = "alert alert-danger text-center";
        this.messageErrorText = "Erreur Dans Ajout Sante !";
        $(function () {
          $(".alert").fadeTo(2000, 500).slideUp(500, function () {
            $(".alert").slideUp(500);
          });
        });
      }




    );

  }
}
