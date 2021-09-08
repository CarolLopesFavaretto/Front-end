import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario';
import { UserLogin } from '../Model/UserLogin';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static cadastrar(user: Usuario) {
    throw new Error('Method not implemented.');
  }
  static getByIdUser(idUser: number) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  entar(userLogin: UserLogin): Observable <UserLogin>{
    return this.http.post<UserLogin>("http://localhost:8080/usuario/logar", userLogin)
  }

  cadastrar(usuario: Usuario): Observable <Usuario>{
    
    return this.http.post<Usuario>("http://localhost:8080/usuario/cadastrar", usuario)

  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuario/consulta/${id}` , this.token)
  }

  logado(){
    let ok = false

    if(environment.token != ""){
    ok=true
    }
    
    return ok
  }
}
