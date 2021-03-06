import { NgModule, Component } from '@angular/core';

import { ClientComponent } from './client.component';
import { BrowserModule } from '@angular/platform-browser';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DetailClientComponent } from './detail-client/detail-client.component';




@NgModule({
    declarations: [
        ClientComponent,
        AjouterComponent,
        SupprimerComponent,
        ModifierComponent,
        DetailClientComponent
    ],
    imports     : [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class ClientModule {
}
