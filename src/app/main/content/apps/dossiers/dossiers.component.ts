import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from '../../../../entities/Dossier';
import { DossierService } from '../../../../../service/dossier.service';
declare var $;

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.css']
})
export class DossiersComponent implements OnInit {

 public dossiers:Dossier[];
 public idClient:number;
  constructor(private dossierService:DossierService,private router: Router) {
    $(function() {
      $('#sample-data-table').DataTable({
        responsive: true
      });
    });
   }

  ngOnInit() {
      this.dossierService.getDossiers().subscribe(
        data=>{
          this.dossiers=data;
          console.log(this.dossiers[0]);
      },error=>{
          console.log("Erreur !"+error);
      }
      );
  }
  affectationClient(id){
    this.idClient=id;
  }
}
