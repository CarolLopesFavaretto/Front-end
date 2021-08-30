import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entar(userLogin: UserLogin): Observable <UserLogin>{
    return this.http.post<UserLogin>("http://localhost:8080/usuario/logar", userLogin)
  }

  cadastrar(usuario: Usuario): Observable <Usuario>{
    
    return this.http.post<Usuario>("http://localhost:8080/usuario/cadastrar", usuario)

  }
}
