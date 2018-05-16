import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Auto } from '../../../../../entities/Auto';
import { Sante } from '../../../../../entities/Sante';
import { SanteService } from '../../../../../../service/sante.service';
import { AutoService } from '../../../../../../service/auto.service';
import { Vehicule } from '../../../../../entities/Vehicule';


@Component({
  selector: 'app-details-dossier',
  templateUrl: './details-dossier.component.html',
  styleUrls: ['./details-dossier.component.css']
})
export class DetailsDossierComponent implements OnInit {

  auto:Auto[]=null;
  sante:Sante[];
  vehi:Vehicule;
  autoModifier:Auto;
  santeModifier:Sante;

  constructor(private santeService:SanteService,private autoService:AutoService,private activateRoute:ActivatedRoute) {
      this.activateRoute.params.subscribe(
        (param:Params)=>{
          let dossierId=param['id'];
          console.log("Test "+dossierId);
        }
      );
      this.autoService.getAllContratAuto().subscribe(
        resp=>{
          this.auto=resp;
        },
        err=>{
          console.log(err);
        }
        ,()=>{
            
        }
      );

      this.santeService.getAllContratSante().subscribe(
        resp=>{
          this.sante=resp;
        },
        err=>{
          console.log(err);
        }
      );
   }

   affectationVehicule(ve){
      this.vehi=ve;
   }

   affectationAuto(au){
     this.autoModifier=au;
   }
   affectationSante(s){
     this.santeModifier=s;
   }
  ngOnInit() {
    this.autoService.getAllContratAuto().subscribe(
      resp=>{
        console.log("Reception :");
        console.log(resp);
        this.auto=resp;
      },
      err=>{
        console.log(err);
      }
      ,()=>{
          console.log(this.auto);
      }
    );
    this.santeService.getAllContratSante().subscribe(
      resp=>{
        this.sante=resp;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
