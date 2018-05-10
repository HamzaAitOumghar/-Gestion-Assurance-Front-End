import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DossierService } from '../../../../../../service/dossier.service';

@Component({
  selector: 'app-supprimer-dossier',
  templateUrl: './supprimer-dossier.component.html',
  styleUrls: ['./supprimer-dossier.component.css']
})
export class SupprimerDossierComponent implements OnInit {

  @Input() idClient;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  constructor(private serviceDossier:DossierService) { 
  }

  ngOnInit() {
  }

  supprimerDossier(id){
    this.serviceDossier.supprimerDossier(id).subscribe(
      data=>{
        this.refrech.emit();
      },err=>{
        console.log("Erreur !"+err);
      }
    );
  }

}
