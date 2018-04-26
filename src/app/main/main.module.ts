import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { CollaborateurComponent } from './content/collaborateur/collaborateur.component';
import { ClientComponent } from './content/apps/client/client.component';
import { DossiersComponent } from './content/apps/dossiers/dossiers.component';


@NgModule({
    declarations: [
    FooterComponent,
    NavbarComponent,
    ToolbarComponent,
    ContentComponent,
    MainComponent,
    DossiersComponent
    ],
    imports     : [
        BrowserModule,
        RouterModule
    ],
    exports: [ MainComponent  ]
})

export class MainModule {
}
