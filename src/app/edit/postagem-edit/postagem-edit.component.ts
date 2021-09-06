import { TemaService } from 'src/app/service/tema.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
    
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private route: ActivatedRoute
    // serviço interno do Angular-> ActivatedRoute => observa a barra de endereços "procurando alguma coisa"
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    // snapshot observa a url inteira (rota), cada parâmetro: [http://]+[localhost]+[:4200]+[/tema-edit]+[/1]
    // ele vai pegar apenas o parâmetro determinado abaixo, no caso o id
    let id = this.route.snapshot.params['id']
    this.findPostagemById(id)

    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findPostagemById(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem editada com sucesso')
      this.router.navigate(['/inicio'])
    })
  }

}
