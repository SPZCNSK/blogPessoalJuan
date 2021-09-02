import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient) { }

    token = {
      headers: new HttpHeaders().set("Authorization", environment.token)
    }
    
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("https://blogpessjuan.herokuapp.com/tema", this.token)
  }

  // sempre que se cria um post é preciso passar uma variável e uma model
  postTema(temaCadastro: Tema): Observable<Tema>{
    return this.http.post<Tema>("https://blogpessjuan.herokuapp.com/tema", temaCadastro, this.token)
  }
}
