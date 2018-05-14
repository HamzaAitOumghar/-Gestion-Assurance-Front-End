import { NgModule, Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AfficheClientComponent } from './affiche-client/affiche-client.component';
import { AjouterDossierComponent } from './ajouter-dossier/ajouter-dossier.component';
import { SupprimerDossierComponent } from './supprimer-dossier/supprimer-dossier.component';
import { RouterModule } from '@angular/router';
import { DossiersComponent } from './dossiers.component';
import { Ng2CompleterModule } from "ng2-completer";
import { ModifierDossierComponent } from './modifier-dossier/modifier-dossier.component';
import { DetailsDossierComponent } from './details-dossier/details-dossier.component';
import { VehiculeComponent } from './details-dossier/vehicule/vehicule.component';




@NgModule({
    declarations: [
        AfficheClientComponent,
        AjouterDossierComponent,
        SupprimerDossierComponent,
        DossiersComponent,
        ModifierDossierComponent,
        DetailsDossierComponent,
        VehiculeComponent

    ],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        Ng2CompleterModule
    ]
})

export class DossierModule {
}
