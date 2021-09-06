import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';

// Array de objetos de rotas
const routes: Routes = [
  // os objetos dentro do array ficam entre chaves {} e são separados por vírgula
  // pathMatch traz toda a rota
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  
  {path: 'entrar', component: EntrarComponent},
  
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'tema', component: TemaComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},

  {path: 'tema-delete/:id', component: TemaDeleteComponent},

  {path: 'postagem-edit/:id', component: PostagemEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
