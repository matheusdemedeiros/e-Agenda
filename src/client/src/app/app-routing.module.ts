import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AuthGuard } from './auth/services/auth.guard';
import { LoginGuard } from './auth/services/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'conta/autenticar', pathMatch: 'full' },
  {
    path: 'conta/registrar',
    component: RegistroComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'conta/autenticar',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'tarefas',
    loadChildren: () =>
      import('./tarefas/tarefa.module').then((m) => m.TarefaModule),
  },
  {
    path: 'contatos',
    loadChildren: () =>
      import('./contatos/contato.module').then((m) => m.ContatoModule),
  },
  {
    path: 'compromissos',
    loadChildren: () =>
      import('./compromissos/compromisso.module').then(
        (m) => m.CompromissoModule
      ),
  },
  {
    path: 'categorias',
    loadChildren: () =>
      import('./categorias/categoria.module').then((m) => m.CategoriaModule),
  },
  {
    path: 'despesas',
    loadChildren: () =>
      import('./despesas/despesa.module').then((m) => m.DespesaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
