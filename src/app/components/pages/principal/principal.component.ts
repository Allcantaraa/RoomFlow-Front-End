import { Component, OnInit } from '@angular/core';
import { Status } from '../../../Enums/Status.enum';
import { ISala } from '../../../Interfaces/Sala.interface';
import { SalaService } from '../../../services/sala.service';

@Component({
  selector: 'app-principal',
  standalone: false,
  
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

  salas: ISala[] = [];

  constructor(private readonly _salaService:  SalaService) {}

  ngOnInit(): void {
      this.getSalas();
  }

  getSalas() {
    this._salaService.getSalas().subscribe({
      next: lista => {
        this.salas = lista;
      },
      error: erro => {
          alert(erro);
      },
    });
  }
  

  salasDisponiveis = this.salas.filter((salas) => salas.Status === Status.Disponivel).length;

  salasReservadas = this.salas.filter((salas) => salas.Status === Status.Reservada).length;

  salasIndisponiveis = this.salas.filter((salas) => salas.Status === Status.Indisponivel).length;


}
