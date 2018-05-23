import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { CollaborateurModule } from './main/content/collaborateur/collaborateur.module';
import { ClientModule } from './main/content/apps/client/client.module';
import { CollaborateurComponent } from './main/content/collaborateur/collaborateur.component';
import { ClientComponent } from './main/content/apps/client/client.component';
import { AccueilModule } from './main/content/apps/accueil/accueil.module';
import { AccueilComponent } from './main/content/apps/accueil/accueil.component';
import { ParametresModule } from './main/content/apps/parametres/parametres.module';
import { HttpModule } from '@angular/http';
import { ClientService } from '../service/client.service';
import { DossiersComponent } from './main/content/apps/dossiers/dossiers.component';
import { DossierService } from '../service/dossier.service';
import { AjouterDossierComponent } from './main/content/apps/dossiers/ajouter-dossier/ajouter-dossier.component';
import { AjouterComponent } from './main/content/apps/client/ajouter/ajouter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DossierModule } from './main/content/apps/dossiers/dossier.module';
import { AutoService } from '../service/auto.service';
import { SanteService } from '../service/sante.service';
import { VehiculeService } from '../service/vehicule.service';
import { DetailsDossierComponent } from './main/content/apps/dossiers/details-dossier/details-dossier.component';
import { TypeContratAutoService } from '../service/typeContratAuto.service';
import { HabitationService } from '../service/habitation.service';

//import { ReactiveFormsModule } from '@angular/forms';



const appRouter: Routes  = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent },
    { path: 'login', component: LoginComponent },
    { path: 'collaborateur', component: CollaborateurComponent },
    { path: 'client', component: ClientComponent },
    { path: 'dossiers', component: DossiersComponent },
    { path: 'dossiers/ajouter', component: AjouterDossierComponent },
    { path: 'dossiers/details', component: DetailsDossierComponent },
    { path: 'client/ajouter', component: AjouterComponent },
    { path: '**', component: CollaborateurComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    MainModule,
    CollaborateurModule,
    ClientModule,
    DossierModule,
    AccueilModule,
    ParametresModule,
    RouterModule.forRoot(appRouter),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService,
    DossierService,
    AutoService,
    SanteService,
    VehiculeService,
    TypeContratAutoService,
    HabitationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
