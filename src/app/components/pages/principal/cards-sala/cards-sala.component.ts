import { Component, Input } from '@angular/core';
import { ISala } from '../../../../Interfaces/Sala';
import { Status } from '../../../../Enums/Status.enum';
import { IUsuario } from '../../../../Interfaces/Usuario';
import { ISala_Reponse } from '../../../../Interfaces/Sala_Response.interface';
import { salaResponse } from '../../../../data/sala-response';

@Component({
  selector: 'app-cards-sala',
  standalone: false,
  templateUrl: './cards-sala.component.html',
  styleUrl: './cards-sala.component.css'
})
export class CardsSalaComponent {  
  @Input({ required: true }) sala: ISala = {} as ISala;

  salaResponse : ISala_Reponse = salaResponse[1];
  exibirCard: boolean = false;

  toggleCard() {
    if(this.sala.status === Status.Indisponivel) {
      this.exibirCard = !this.exibirCard;
    } 
  }

  corDoCard(): string {
    if (this.sala.status === Status.Disponivel) {
      return 'rgb(58, 194, 58)';
    } else if (this.sala.status === Status.Indisponivel) {
      return 'rgb(219, 70, 59)';
    } else {
      return 'rgb(190, 219, 59)';
    }
  }

}
