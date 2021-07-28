import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { InicioComponent } from './inicio/inicio.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
