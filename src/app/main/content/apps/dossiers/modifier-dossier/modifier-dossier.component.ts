import { Component, OnInit, Input } from '@angular/core';
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
	     dateCreation :new FormControl(this.dossier.dateCreation,Validators.required),
	     client:new FormControl(null,Validators.required)
  });

  }
  modifierDossier(){
    let id =this.from.value.client.match('\\d+')[0]!=null?this.from.value.client.match('\\d+')[0]:"";
    this.from.value.client=null;
    this.dossierService.modifierDossier(this.from.value,id).subscribe(
      res=>{
        
        this.messageStyle="alert alert-success text-center";
        this.messageErrorText="Dossier a été bien modifier";
          $(function() {
            $(".alert").fadeTo(2000, 500).slideUp(500, function(){
              $(".alert").slideUp(500);
              });
                
          }); 
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
