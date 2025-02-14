import { Component, Input } from '@angular/core';
import { ISala } from '../../../Interfaces/Sala';
import { Status } from '../../../Enums/Status.enum';
import { SalaList } from '../../../data/sala-lista';

@Component({
  selector: 'app-principal',
  standalone: false,
  
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  
  // salas: ISala[] = [
  //   { descricao: '1', status: Status.Disponivel },
  //   { descricao: '2', status: Status.Indisponivel },
  //   {descricao: '3', status: Status.Ocupado},
  // ];


  salaLista = SalaList;

  salasDisponiveis = this.salaLista.filter((salas) => salas.status === Status.Disponivel).length;

  salasReservadas = this.salaLista.filter((salas) => salas.status === Status.Reservada).length;

  salasIndisponiveis = this.salaLista.filter((salas) => salas.status === Status.Indisponivel).length;

}
