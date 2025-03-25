import { Component, OnInit } from '@angular/core';
import { UsersList } from '../../../data/usuario-lista';
import { IUsuario } from '../../../Interfaces/Usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-gerenciamento',
  standalone: false,
  
  templateUrl: './gerenciamento.component.html',
  styleUrl: './gerenciamento.component.css'
})
export class GerenciamentoComponent {

  constructor(private readonly _usuarioService: UsuarioService) {}

  usuarios: IUsuario[] = UsersList;

  OnDelete(user: IUsuario) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== user.id);
  }

}
