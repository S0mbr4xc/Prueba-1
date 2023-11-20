import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { DatosComponent } from './pages/datos/datos.component';

const routes: Routes = [
  {path: "paginas/agregar", component: AgregarComponent},
  {path: "paginas/datos", component: DatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
