import { Component } from '@angular/core';
import { Status } from '../../../Enums/Status.enum';
import { SalaList } from '../../../data/sala-lista';

@Component({
  selector: 'app-principal',
  standalone: false,
  
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  salaLista = SalaList;

  salasDisponiveis = this.salaLista.filter((salas) => salas.status === Status.Disponivel).length;

  salasReservadas = this.salaLista.filter((salas) => salas.status === Status.Reservada).length;

  salasIndisponiveis = this.salaLista.filter((salas) => salas.status === Status.Indisponivel).length;

}
