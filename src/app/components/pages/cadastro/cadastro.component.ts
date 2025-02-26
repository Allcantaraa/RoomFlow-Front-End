import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersList } from '../../../data/usuario-lista';


@Component({
  selector: 'app-cadastro',
  standalone: false,
  
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  usuarios = UsersList;

  formularioDeUsuario: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder) { }
  
  inicializaFormulario() {
    this.formularioDeUsuario = this.formbuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      perfil: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.inicializaFormulario();
  }

  SubmitForm() {
    if (this.formularioDeUsuario.valid) {
      this.usuarios.push(this.formularioDeUsuario.value);
      this.formularioDeUsuario.reset();
    }
  }

}
