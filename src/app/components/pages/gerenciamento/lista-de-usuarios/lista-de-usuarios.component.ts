import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsuario } from '../../../../Interfaces/Usuario';

@Component({
  selector: 'app-lista-de-usuarios',
  standalone: false,
  
  templateUrl: './lista-de-usuarios.component.html',
  styleUrl: './lista-de-usuarios.component.css'
})
export class ListaDeUsuariosComponent {

  displayedColumns: string[] = ['id','login', 'nome', 'perfil','acoes'];

  @Input() usersList: IUsuario[] = [];

  @Output() userDeletado = new EventEmitter<IUsuario>();


  OndeletarUsuario(user: IUsuario) {
    this.userDeletado.emit(user);
  }
}
