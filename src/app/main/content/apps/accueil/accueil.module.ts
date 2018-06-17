import { NgModule, Component } from '@angular/core';

import { AccueilComponent } from './accueil.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";




@NgModule({
    declarations: [
    AccueilComponent
    ],
    imports     : [
        BrowserModule    ,ReactiveFormsModule,Ng2CompleterModule

    ]
})

export class AccueilModule {
}
