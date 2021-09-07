import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../Model/Postagem';
import { Tema } from '../Model/Tema';
import { Usuario } from '../Model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  postagem: Postagem = new Postagem()
  listasPostagem: Postagem[]

  tema: Tema = new Tema()
  listasTema: Tema[]
  idTema: number
  temaInsert: Tema = new Tema()

  user: Usuario = new Usuario()
  idUser = environment.id


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService
  ) { }

  ngOnInit() {

    if(environment.token == ""){
      this.router.navigate(["/entar"])
    }

    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listasTema = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe ((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe ((resp: Postagem[]) => {
      this.listasPostagem = resp
    })
  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe ((resp: Usuario) => {
      this.user = resp 
    })
  }

  publicar(){
    this.temaInsert.id = this.idTema
    this.postagem.tema = this.temaInsert

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagens(this.postagem).subscribe ((resp: Postagem) => {
      this.postagem = resp
      alert("Postagem realizada com sucesso!")
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
