import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sante } from '../../../../../../entities/Sante';
import { SanteService } from '../../../../../../../service/sante.service';

@Component({
  selector: 'app-supprimer-contrat-sante',
  templateUrl: './supprimer-contrat-sante.component.html',
  styleUrls: ['./supprimer-contrat-sante.component.css']
})
export class SupprimerContratSanteComponent implements OnInit {

  @Input() sante:Sante ;
  @Output() refrech: EventEmitter<any> = new EventEmitter();


  constructor(private santeService:SanteService) { }

  ngOnInit() {
  }
  supprimerContrat(){
    this.santeService.deleteContratSante(this.sante.numContratSante).subscribe(

      resp=>{
        this.refrech.emit();
      }
      ,err=>{
        alert("Erreur dans la Suppresion ! !");
      }


    );
  }
}
