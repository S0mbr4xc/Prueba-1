import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { DatosComponent } from './pages/datos/datos.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AgregarComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"prueba-1-esteban-cordova","appId":"1:640626571413:web:b07b8721be5000ae37039c","storageBucket":"prueba-1-esteban-cordova.appspot.com","apiKey":"AIzaSyDmosJtPz6F-BRD3hGr58nc5JmiJ1WJPoU","authDomain":"prueba-1-esteban-cordova.firebaseapp.com","messagingSenderId":"640626571413","measurementId":"G-ZT779GZQSX"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
