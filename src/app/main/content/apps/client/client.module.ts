import { NgModule, Component } from '@angular/core';

import { ClientComponent } from './client.component';
import { BrowserModule } from '@angular/platform-browser';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ReactiveFormsModule }   from '@angular/forms';




@NgModule({
    declarations: [
    ClientComponent,
    AjouterComponent,
    SupprimerComponent,
    ModifierComponent
    ],
    imports     : [
        BrowserModule,
        ReactiveFormsModule
    ]
})

export class ClientModule {
}
