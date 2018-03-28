import { NgModule, Component } from '@angular/core';

import { PhaseComponent } from './phase.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormPhaseComponent } from './form-phase/form-phase.component';


@NgModule({
    declarations: [
    PhaseComponent,
    FormPhaseComponent
    ],
    imports     : [
        BrowserModule
    ]
})

export class PhaseModule {
}
