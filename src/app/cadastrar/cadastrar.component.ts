import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string
  tipoDeUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)    
  }
  
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoDeUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoDeUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert("As senhas estão diferentes")
    }
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
  }

}
