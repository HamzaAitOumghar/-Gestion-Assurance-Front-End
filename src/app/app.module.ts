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

//import { ReactiveFormsModule } from '@angular/forms';



const appRouter: Routes  = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent },
    { path: 'login', component: LoginComponent },
    { path: 'collaborateur', component: CollaborateurComponent },
    { path: 'client', component: ClientComponent },
    { path: 'dossiers', component: DossiersComponent },
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
    AccueilModule,
    ParametresModule,
    RouterModule.forRoot(appRouter),
    HttpModule
  ],
  providers: [
    ClientService,
    DossierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
