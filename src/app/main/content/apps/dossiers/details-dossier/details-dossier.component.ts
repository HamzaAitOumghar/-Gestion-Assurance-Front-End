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
  rechercheTest=0;
  rechercheTest2=0;
  rechercheTest3=0;

  autoConstante:Auto[];
  
  sante: Sante[];
  santeConstante:Sante[];

  habitation:Habitation[];
  habitationContante:Habitation[];
  
  vehi: Vehicule;
  autoModifier: Auto;
  santeModifier: Sante;
  habitationModifier:Habitation;
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
        this.autoConstante=resp;
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
        this.santeConstante=resp;
      },
      err => {
        console.log(err);
      }
    );
    this.habitationService.getAllContratHabitationInDossier(this.dossierId).subscribe(
        resp=>{
          this.habitation=resp;
          this.habitationContante=resp;
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
  affectationHabitation(h) {
    this.habitationModifier = h;
    
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
        this.autoConstante = resp;
        this.rechercheTest=0;
      },
      err => {
        console.log(err);
      }
      , () => {

      }
    );

    this.santeService.getAllContratSanteInDossier(this.dossierId).subscribe(
      resp => {
        this.santeConstante = resp;
        this.rechercheTest2=0;
      },
      err => {
        console.log(err);
      }
    );
    this.habitationService.getAllContratHabitationInDossier(this.dossierId).subscribe(
      resp=>{
        this.habitationContante=resp;
        this.rechercheTest3=0;
      },
      err=>{
        console.log(err);
      }
  );
  }
  search(test){      
      var result=this.autoConstante.filter(v=>v.idAuto==test);
      
      if(result.length==0&&test!=''&&this.autoConstante.length!=0){
        this.rechercheTest=1;
        return;
      }
      else if(this.autoConstante!=[]&&test==''){
        this.auto=this.autoConstante;
        this.rechercheTest=0;
      }
      else{
        this.auto=result;
        this.rechercheTest=0;
      }
    }
    search2(test){      
      var result=this.santeConstante.filter(v=>v.numContratSante==test);
      
      if(result.length==0&&test!=''&&this.santeConstante.length!=0){
        this.rechercheTest2=1;
        return;
      }
      else if(this.santeConstante!=[]&&test==''){
        this.sante=this.santeConstante;
        this.rechercheTest2=0;
      }
      else{
        this.sante=result;
        this.rechercheTest2=0;
      }
    }
    search3(test){      
      var result=this.habitationContante.filter(v=>v.idContratHabitation==test);
      
      if(result.length==0&&test!=''&&this.habitationContante.length!=0){
        this.rechercheTest3=1;
        return;
      }
      else if(this.habitationContante!=[]&&test==''){
        this.habitation=this.habitationContante;
        this.rechercheTest3=0;
      }
      else{
        this.habitation=result;
        this.rechercheTest3=0;
      }
    }
}
