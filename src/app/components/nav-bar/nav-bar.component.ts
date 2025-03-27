import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,  // Se você estiver usando standalone components, caso contrário, remova
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'] // Corrigido de "styleUrl" para "styleUrls"
})
export class NavBarComponent {
  @Input() textoNav: string = '';  // Aqui, o textoNav será passado de um componente pai
}

