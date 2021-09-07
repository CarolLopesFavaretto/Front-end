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

  constructor(
    private http: HttpClient
  ) { }

  entar(userLogin: UserLogin): Observable <UserLogin>{
    return this.http.post<UserLogin>("https://blogcarollopes.herokuapp.com/usuario/logar", userLogin)
  }

  cadastrar(usuario: Usuario): Observable <Usuario>{
    
    return this.http.post<Usuario>("https://blogcarollopes.herokuapp.com/usuario/cadastrar", usuario)

  }

  getByIdUser(id: number): Observable<Usuario>{
  return this.http.get<Usuario>(`https://blogcarollopes.herokuapp.com/usuario/${id}`)
  }

  logado(){
    let ok = false

    if(environment.token != ""){
    ok=true
    }
    
    return ok
  }
}
