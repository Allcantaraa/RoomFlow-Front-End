import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { GerenciamentoComponent } from './components/pages/gerenciamento/gerenciamento.component';
import { EsqueciASenhaComponent } from './components/pages/esqueci-a-senha/esqueci-a-senha.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ContainerLoginComponent } from './components/pages/login/container-login/container-login.component';
import { DataPipe } from './Pipes/data.pipe';
import { CardsSalaComponent } from './components/pages/principal/cards-sala/cards-sala.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaDeUsuariosComponent } from './components/pages/gerenciamento/lista-de-usuarios/lista-de-usuarios.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


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
    ListaDeUsuariosComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
