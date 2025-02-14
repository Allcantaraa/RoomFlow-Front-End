import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-container-login',
  standalone: false,
  
  templateUrl: './container-login.component.html',
  styleUrl: './container-login.component.css',})

export class ContainerLoginComponent {
  email = '';
  senha = '';

  urlLogo = 'icons/logoRoom_processed.png';


}
