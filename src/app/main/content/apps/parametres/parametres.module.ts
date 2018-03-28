import { NgModule, Component } from '@angular/core';

import { ParametresComponent } from './parametres.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavsComponent } from './sidenavs/sidenavs.component';
import { RouterModule } from '@angular/router';
import { PhaseModule } from './phase/phase.module';
import { PhaseComponent } from './phase/phase.component';

const AppRouter = [
    {
        path: 'parametres', component: ParametresComponent,
        children: [
            { path: '', redirectTo: 'phase', pathMatch: 'full'},
            { path: 'pahse', component: PhaseComponent }
          ]
     }
  ];


@NgModule({
    declarations: [
    ParametresComponent,
    SidenavsComponent
    ],
    imports     : [
        BrowserModule,
        PhaseModule,
        RouterModule.forRoot(AppRouter)
    ]
})

export class ParametresModule {
}
