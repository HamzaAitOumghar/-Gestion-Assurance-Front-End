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
import { ModifierContratComponent } from './details-dossier/modifier-contrat/modifier-contrat.component';
import { SupprimercontratComponent } from './details-dossier/supprimercontrat/supprimercontrat.component';
import { ModifierContratSanteComponent } from './details-dossier/modifier-contrat-sante/modifier-contrat-sante.component';
import { SupprimerContratSanteComponent } from './details-dossier/supprimer-contrat-sante/supprimer-contrat-sante.component';
import { AjouterContratAutoComponent } from './details-dossier/ajouter-contrat-auto/ajouter-contrat-auto.component';
import { AjouterContratSanteComponent } from './details-dossier/ajouter-contrat-sante/ajouter-contrat-sante.component';
import { ModifierContratHabitationComponent } from './details-dossier/modifier-contrat-habitation/modifier-contrat-habitation.component';
import { SupprimerContratHabitationComponent } from './details-dossier/supprimer-contrat-habitation/supprimer-contrat-habitation.component';
import { AjouterContratHabitationComponent } from './details-dossier/ajouter-contrat-habitation/ajouter-contrat-habitation.component';




@NgModule({
    declarations: [
        AfficheClientComponent,
        AjouterDossierComponent,
        SupprimerDossierComponent,
        DossiersComponent,
        ModifierDossierComponent,
        DetailsDossierComponent,
        VehiculeComponent,
        ModifierContratComponent,
        SupprimercontratComponent,
        ModifierContratSanteComponent,
        SupprimerContratSanteComponent,
        AjouterContratAutoComponent,
        AjouterContratSanteComponent,
        ModifierContratHabitationComponent,
        SupprimerContratHabitationComponent,
        AjouterContratHabitationComponent

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
