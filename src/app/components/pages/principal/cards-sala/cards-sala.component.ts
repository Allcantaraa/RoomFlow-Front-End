import { Component, Input } from '@angular/core';
import { Status } from '../../../../Enums/Status.enum';
import { ISala } from '../../../../Interfaces/Sala.interface';


@Component({
  selector: 'app-cards-sala',
  standalone: false,
  templateUrl: './cards-sala.component.html',
  styleUrl: './cards-sala.component.css'
})
export class CardsSalaComponent {  
  @Input({ required: true }) sala: ISala = {} as ISala;

  exibirCard: boolean = false;

  toggleCard() {
    if(this.sala.Status === Status.Reservada) {
      this.exibirCard = !this.exibirCard;
    } 
  }

  corDoCard(): string {
    if (this.sala.Status === Status.Disponivel) {
      return 'rgb(40, 167, 69) ';
    } else if (this.sala.Status === Status.Indisponivel) {
      return 'rgb(117, 117, 117)';
    } else {
      return 'rgb(198, 40, 40)';
    }
  }

}
