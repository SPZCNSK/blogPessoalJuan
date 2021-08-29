import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

// Array de objetos de rotas
const routes: Routes = [
  // os objetos dentro do array ficam entre chaves {} e são separados por vírgula
  // pathMatch traz toda a rota
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  
  {path: 'entrar', component: EntrarComponent},
  
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
