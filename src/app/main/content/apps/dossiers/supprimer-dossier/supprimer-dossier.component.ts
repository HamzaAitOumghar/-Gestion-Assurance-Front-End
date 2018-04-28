import { Component, OnInit, Input } from '@angular/core';
import { DossierService } from '../../../../../../service/dossier.service';

@Component({
  selector: 'app-supprimer-dossier',
  templateUrl: './supprimer-dossier.component.html',
  styleUrls: ['./supprimer-dossier.component.css']
})
export class SupprimerDossierComponent implements OnInit {

  @Input() idClient;
  constructor(private serviceDossier:DossierService) { 
  }

  ngOnInit() {
  }

  supprimerDossier(id){
    this.serviceDossier.supprimerClient(id).subscribe(
      data=>{
        //this.onRefrech.emit(true);
      },err=>{
        console.log("Erreur !"+err);
      }
    );
    window.location.reload();
  }

}
