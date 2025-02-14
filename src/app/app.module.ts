import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { GerenciamentoComponent } from './components/pages/gerenciamento/gerenciamento.component';
import { EsqueciASenhaComponent } from './components/pages/esqueci-a-senha/esqueci-a-senha.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerLoginComponent } from './components/pages/login/container-login/container-login.component';
import { DataPipe } from './Pipes/data.pipe';
import { CardsSalaComponent } from './components/pages/principal/cards-sala/cards-sala.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    GerenciamentoComponent,
    EsqueciASenhaComponent,
    CadastroComponent,
    ContainerLoginComponent,
    DataPipe,
    CardsSalaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
