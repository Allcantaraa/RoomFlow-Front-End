import { NgModule } from "@angular/core";
import {MatInput} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatTableModule,
    MatInput,
    MatFormFieldModule
  ],
  exports: [
    MatTableModule,
    MatInput,
    MatFormFieldModule
  ],
  
  providers: [],
})

export class AngularMaterialModule { }