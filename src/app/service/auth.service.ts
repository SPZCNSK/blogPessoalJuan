import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // criando um método de entrar (poderia ser outro nome) recebendo uma variável usuarioLogin que tem que receber os dados de UsuarioLogin da model, 
  // Observable confere os dados e converte os dados pra Json na requisição e na resposta traduz de volta para uma linguagem compreensível para o front-end
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogpessjuan.herokuapp.com/usuarios/logar',usuarioLogin)
  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessjuan.herokuapp.com/usuarios/cadastrar',usuario)
  }

  atualizar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('https://blogpessjuan.herokuapp.com/usuarios/alterar',usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessjuan.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  adm(){
    let ok: boolean = false
    
    if(environment.tipo == 'adm'){
      ok = true
    }

    return ok
  }

}
