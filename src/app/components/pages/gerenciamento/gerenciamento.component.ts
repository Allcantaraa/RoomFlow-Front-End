import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { IUsuario } from '../../../Interfaces/Usuario.interface';

@Component({
  selector: 'app-gerenciamento',
  standalone: false,
  
  templateUrl: './gerenciamento.component.html',
  styleUrl: './gerenciamento.component.css'
})
export class GerenciamentoComponent implements OnInit {

  constructor(private readonly _usuarioService: UsuarioService) {}

  usuarios: IUsuario[] = [];

 
  ngOnInit(): void {
    this.getUsers();
}

getUsers() {
  this._usuarioService.getUsers().subscribe({
    next: list => {
      this.usuarios = list;
    },
    error: erro => {
      console.log(erro);
    }
  })
}

}
