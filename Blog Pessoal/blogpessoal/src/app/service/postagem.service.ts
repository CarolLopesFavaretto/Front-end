import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../Model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }
  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>("http://localhost:8080/postagem/", this.token)

  }
  getByIdPostagem(id: number): Observable <Postagem>{
  return this.http.get<Postagem>(`http://localhost:8080/postagem/${id}`, this.token)
  }

  postPostagens(postagem: Postagem): Observable<Postagem> {
    console.log (postagem)
    return this.http.post<Postagem>("http://localhost:8080/postagem/", postagem, this.token)
  }
  putPostagem (postagem: Postagem): Observable <Postagem>{
    return this.http.put<Postagem>("http://localhost:8080/postagem/", postagem, this.token)

  }
  deletePOstagem(id: number){
    return this.http.delete(`http://localhost:8080/postagem/${id}`, this.token)
  }
}
