import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { EsqueciASenhaComponent } from './components/pages/esqueci-a-senha/esqueci-a-senha.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { GerenciamentoComponent } from './components/pages/gerenciamento/gerenciamento.component';
import { InicialComponent } from './components/pages/inicial/inicial.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'esqueci', component: EsqueciASenhaComponent },
  { path: 'cadastro', component: CadastroComponent },
  {path: 'solicitacoes', component: GerenciamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
