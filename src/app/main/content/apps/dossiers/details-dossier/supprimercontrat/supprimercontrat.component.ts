import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../../../../../../entities/Auto';
import { AutoService } from '../../../../../../../service/auto.service';

@Component({
  selector: 'app-supprimercontrat',
  templateUrl: './supprimercontrat.component.html',
  styleUrls: ['./supprimercontrat.component.css']
})
export class SupprimercontratComponent implements OnInit {

  @Input() ContratAuto:Auto;
  @Output() refrech: EventEmitter<any> = new EventEmitter();


  constructor(private autoService:AutoService) { }

  ngOnInit() {
  }
  supprimerContrat(){
    this.autoService.deleteContratAuto(this.ContratAuto.idAuto).subscribe(

      resp=>{
        this.refrech.emit();
      }
      ,err=>{
        alert("Erreur dans la Suppresion ! !");
      }


    );
  }
}
