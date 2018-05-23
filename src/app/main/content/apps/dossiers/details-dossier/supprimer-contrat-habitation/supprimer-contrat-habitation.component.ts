import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Habitation } from '../../../../../../entities/Habitation';
import { HabitationService } from '../../../../../../../service/habitation.service';

@Component({
  selector: 'app-supprimer-contrat-habitation',
  templateUrl: './supprimer-contrat-habitation.component.html',
  styleUrls: ['./supprimer-contrat-habitation.component.css']
})
export class SupprimerContratHabitationComponent implements OnInit {
  @Input() contratHabitation:Habitation;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  constructor(private serviceHabitation:HabitationService) { }

  ngOnInit() {
  }
  supprimerContrat(){

    this.serviceHabitation.deleteContratHabitation(this.contratHabitation.idContratHabitation).subscribe(
      resp=>{
        this.refrech.emit();
      }
      ,err=>{

      }
    );

  }

}
