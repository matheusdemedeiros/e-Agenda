import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificadorService } from 'src/shared/notificador.service';
import { DespesaService } from '../services/despesa.service';
import { VisualizarDespesaViewModel } from '../view-models/visualizar-despesa.view-model';

@Component({
  selector: 'app-excluir-despesa',
  templateUrl: './excluir-despesa.component.html',
})
export class ExcluirDespesaComponent implements OnInit {

  public despesaFormVM: VisualizarDespesaViewModel =
    new VisualizarDespesaViewModel();

  constructor(
    titulo: Title,
    private router: Router,
    private route: ActivatedRoute,
    private notificador: NotificadorService,
    private despesaService: DespesaService
  ) {
    titulo.setTitle('Excluir Despesa - e-Agenda');
  }

  ngOnInit(): void {
    this.despesaFormVM = this.route.snapshot.data['despesa'];
  }

  public gravar() {
    this.despesaService.excluir(this.despesaFormVM.id).subscribe({
      next: (despesaId) => this.processarSucesso(despesaId),
      error: (erro) => this.processarFalha(erro),
    });
  }

  private processarSucesso(despesaId: string): void {
    this.notificador.mensagemSucesso('Despesa excluída com sucesso!');
    this.router.navigate(['/despesas/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      this.notificador.mensagemErro('Falha ao excluir despesa!');
      console.error(erro);
    }
  }
}
