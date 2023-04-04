import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesaRoutingModule } from './despesa-routing.module';
import { DespesaAppComponent } from './depesa-app.component';
import { ListarDespesaComponent } from './listar/listar-despesa.component';
import { InserirDespesaComponent } from './inserir/inserir-despesa.component';
import { EditarDespesaComponent } from './editar/editar-despesa.component';
import { ExcluirDespesaComponent } from './excluir/excluir-despesa.component';
import { FormsDespesaResolver } from './services/forms-despesa.resolver';
import { VisualizarDespesaResolver } from './services/visualizar-despesa.resolver';
import { DespesaService } from './services/despesa.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategoriaModule } from '../categorias/categoria.module';

@NgModule({
  declarations: [
    DespesaAppComponent,
    ListarDespesaComponent,
    InserirDespesaComponent,
    EditarDespesaComponent,
    ExcluirDespesaComponent,
  ],
  imports: [
    CommonModule,
    DespesaRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
   CategoriaModule
  ],
  providers: [DespesaService, FormsDespesaResolver, VisualizarDespesaResolver],
})
export class DespesaModule {}
