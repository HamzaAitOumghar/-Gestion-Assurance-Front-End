import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DossierService } from '../../../../../../service/dossier.service';
import { Dossier } from '../../../../../entities/Dossier';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompleterService, CompleterData } from 'ng2-completer';
import { ClientService } from '../../../../../../service/client.service';
import { Client } from '../../../../../entities/Client';
declare var $;
@Component({
  selector: 'app-modifier-dossier',
  templateUrl: './modifier-dossier.component.html',
  styleUrls: ['./modifier-dossier.component.css']
})
export class ModifierDossierComponent implements OnInit {

  @Input() dossier:Dossier;
  @Output() refrech: EventEmitter<any> = new EventEmitter();
  
  from:FormGroup;
  messageStyle:string="d-none";
  messageErrorText:string;
  clients:Client[];
  searchData=[];

  constructor(private clientService:ClientService,private dossierService:DossierService) {
    this.clientService.getClient().map(resp=>resp.json()).subscribe(
      data=>{
        this.clients=data;
        for(let c of this.clients){
          let str=c.nom+" "+c.prenom+"("+c.idClient+")";
          this.searchData.push(str);
        }
      }
    );

   }

  ngOnInit() {
  }

  ngOnChanges(){
      this.from=new FormGroup({
       numero:new FormControl(this.dossier.numero,Validators.required),
	     status:new FormControl(this.dossier.status,Validators.required),
	     dateCreation :new FormControl(this.dossier.dateCreation,Validators.required)
  });

  }
  modifierDossier(){
   let test=Object.values(this.dossier);
    this.dossierService.modifierDossier(this.from.value,test[4]).subscribe(
      res=>{
        this.messageStyle="alert alert-success text-center";
        this.messageErrorText="Dossier a été bien modifier";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });
                
          });
          this.refrech.emit(); 
      },
      err=>{
        this.messageStyle="alert alert-danger text-center";
        this.messageErrorText="Erreur Dans Modification du Dossier";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });  
          }); 
      }
  
  );
  }

}
