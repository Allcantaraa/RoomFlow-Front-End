import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../Interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private readonly _http: HttpClient) { }

  url: string = 'roomflow-api.tccnapratica.com.br/swagger';


  getUsers(): Observable<IUsuario> {
    return this._http.get<IUsuario>(`${this.url}`);
  }
}
