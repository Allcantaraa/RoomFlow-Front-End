import { Component } from '@angular/core';
import { UsersList } from '../../../data/usuario-lista';
import { IUsuario } from '../../../Interfaces/Usuario';

@Component({
  selector: 'app-gerenciamento',
  standalone: false,
  
  templateUrl: './gerenciamento.component.html',
  styleUrl: './gerenciamento.component.css'
})
export class GerenciamentoComponent {


  usuarios: IUsuario[] = UsersList;

  OnDelete(user: IUsuario) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== user.id);
  }

}
