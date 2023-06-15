import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AlfabetosModule } from './alfabetos/alfabetos.module';
import { TraductoresModule } from './traductores/traductores.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    AlfabetosModule,
    SharedModule,
    TraductoresModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
