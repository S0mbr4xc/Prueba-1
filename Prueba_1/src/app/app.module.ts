import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { DatosComponent } from './pages/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AgregarComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
