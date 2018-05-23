import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auto } from '../../../../../entities/Auto';
import { Sante } from '../../../../../entities/Sante';
import { SanteService } from '../../../../../../service/sante.service';
import { AutoService } from '../../../../../../service/auto.service';
import { Vehicule } from '../../../../../entities/Vehicule';
import { Habitation } from '../../../../../entities/Habitation';
import { HabitationService } from '../../../../../../service/habitation.service';


@Component({
  selector: 'app-details-dossier',
  templateUrl: './details-dossier.component.html',
  styleUrls: ['./details-dossier.component.css']
})
export class DetailsDossierComponent implements OnInit {

  auto: Auto[] = null;
  sante: Sante[];
  habitation:Habitation[];
  vehi: Vehicule;
  autoModifier: Auto;
  santeModifier: Sante;
  dossierId;

  constructor(private santeService: SanteService, private autoService: AutoService, private activateRoute: ActivatedRoute,private habitationService:HabitationService) {
    this.activateRoute.queryParams.subscribe(
      (param) => {
        this.dossierId = param['id'];
      },
      (err)=>{

      },
      ()=>{
      }

    );
    this.autoService.getAllContratAutoInDossier(this.dossierId).subscribe(
      resp => {
        this.auto = resp;
      },
      err => {
        console.log(err);
      }
      , () => {

      }
    );

    this.santeService.getAllContratSanteInDossier(this.dossierId).subscribe(
      resp => {
        this.sante = resp;
      },
      err => {
        console.log(err);
      }
    );
    this.habitationService.getAllContratHabitationInDossier(this.dossierId).subscribe(
        resp=>{
          this.habitation=resp;
        },
        err=>{
          console.log(err);
        }
    );
  }

  affectationVehicule(ve) {
    this.vehi = ve;
  }

  affectationAuto(au) {
    this.autoModifier = au;
  }
  affectationSante(s) {
    this.santeModifier = s;
  }
  
  ngOnInit() {
    this.activateRoute.queryParams.subscribe(
      (param) => {
        this.dossierId = param['id'];
      },
      (err)=>{

      },
      ()=>{
      }

    );
    this.autoService.getAllContratAutoInDossier(this.dossierId).subscribe(
      resp => {
        this.auto = resp;
      },
      err => {
        console.log(err);
      }
      , () => {

      }
    );

    this.santeService.getAllContratSanteInDossier(this.dossierId).subscribe(
      resp => {
        this.sante = resp;
      },
      err => {
        console.log(err);
      }
    );
    this.habitationService.getAllContratHabitationInDossier(this.dossierId).subscribe(
      resp=>{
        this.habitation=resp;
      },
      err=>{
        console.log(err);
      }
  );
  }

}
