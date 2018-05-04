import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-ajouter-dossier',
  templateUrl: './ajouter-dossier.component.html',
  styleUrls: ['./ajouter-dossier.component.css']
})
export class AjouterDossierComponent implements OnInit {

  formDossier:FormGroup;
  formAuto:FormGroup;
  formSante:FormGroup;

  constructor() {
    this.formDossier=new FormGroup({
      numDossier:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern("^(0|[1-9][0-9]*)$")
      ])),
      dateDossier:new FormControl('',Validators.required),
      statusDossier:new FormControl('',Validators.required),
      idClient:new FormControl('',Validators.required)
    });
    this.formAuto=new FormGroup({
      dateEffetPolice:new FormControl(),
      dateEchange:new FormControl(),
      immatriculation:new FormControl(),
      marque:new FormControl(),
      nbrPlace:new FormControl('',Validators.pattern("^(0|[1-9][0-9]*)$")),
      date1Service:new FormControl(),
      usage:new FormControl(),
      nbrChevaux:new FormControl('',Validators.pattern("^(0|[1-9][0-9]*)$")),
      moteur:new FormControl('Essence')
    });
    this.formSante=new FormGroup({
      dateSante:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      montant:new FormControl('',Validators.required)
    });
    
 
  }
  
  ngOnInit() {
   
  }

  enregistrer(){
     
    console.log("Dossier"+JSON.stringify(this.formDossier.value));
    console.log("Auto"+JSON.stringify(this.formAuto.value));
    
  }

}
