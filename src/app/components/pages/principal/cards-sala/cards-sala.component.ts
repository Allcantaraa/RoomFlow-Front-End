import { Component, Input } from '@angular/core';
import { ISala } from '../../../../Interfaces/Sala';
import { Status } from '../../../../Enums/Status.enum';

@Component({
  selector: 'app-cards-sala',
  standalone: false,
  
  templateUrl: './cards-sala.component.html',
  styleUrl: './cards-sala.component.css'
})
export class CardsSalaComponent {
  
  @Input({required: true}) sala: ISala = {} as ISala;

  corDoCard(): string {
    if (this.sala.status === Status.Disponivel) {
      return 'rgb(58, 194, 58)';
    } else if (this.sala.status === Status.Indisponivel) {
      return 'rgb(219, 70, 59)';
    } else {
      return 'rgb(190, 219, 59)'
    }
  }

}
