import { NgModule, Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AfficheClientComponent } from './affiche-client/affiche-client.component';
import { AjouterDossierComponent } from './ajouter-dossier/ajouter-dossier.component';
import { SupprimerDossierComponent } from './supprimer-dossier/supprimer-dossier.component';
import { RouterModule } from '@angular/router';
import { DossiersComponent } from './dossiers.component';




@NgModule({
    declarations: [
        AfficheClientComponent,
        AjouterDossierComponent,
        SupprimerDossierComponent,
        DossiersComponent

    ],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ]
})

export class DossierModule {
}
