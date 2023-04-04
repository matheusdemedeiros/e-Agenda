import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/categorias/services/categoria.service';
import { ListarCategoriaViewModel } from 'src/app/categorias/view-models/listar-categoria.view-model';
import { NotificadorService } from 'src/shared/notificador.service';
import { DespesaService } from '../services/despesa.service';
import { CategoriaSelecionadaViewModel } from '../view-models/categoria-selecionda.view-model';
import { FormaPgtoEnum } from '../view-models/forma-pagamento.enum';
import { FormsDespesaViewModel } from '../view-models/forms-despesa.view-model';

@Component({
  selector: 'app-inserir-despesa',
  templateUrl: './inserir-despesa.component.html',
  styles: [],
})
export class InserirDespesaComponent implements OnInit {
  public formDespesa: FormGroup;
  public despesaFormVM: FormsDespesaViewModel = new FormsDespesaViewModel();
  public formasPagamento = Object.values(FormaPgtoEnum).filter(
    (v) => !Number.isFinite(v)
  );

  public categorias$: Observable<ListarCategoriaViewModel[]>;

  constructor(
    titulo: Title,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private despesaService: DespesaService,
    private notificador: NotificadorService,
    private router: Router
  ) {
    titulo.setTitle('Cadastrar Despesa - e-Agenda');
  }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.selecionarTodos();

    this.formDespesa = this.fb.group({
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      data: ['', [Validators.required]],
      formaPagamento: ['', [Validators.required]],
      categoriasSelecionadas: ['', [Validators.required]],
    });
  }

  get descricao() {
    return this.formDespesa.get('descricao');
  }
  get valor() {
    return this.formDespesa.get('valor');
  }
  get data() {
    return this.formDespesa.get('data');
  }
  get formaPagamento() {
    return this.formDespesa.get('formaPagamento');
  }
  get categoriasSelecionadas() {
    return this.formDespesa.get('categoriasSelecionadas');
  }

  public atribuirCategoriasSelecionadas(): void {
    if (!this.categoriasSelecionadas?.value) return;

    this.categoriasSelecionadas?.value.forEach(
      (value: ListarCategoriaViewModel) => {
        let item = new CategoriaSelecionadaViewModel();
        item.id = value.id;
        item.titulo = value.titulo;
        item.selecionada = true;
        this.despesaFormVM.categoriasSelecionadas.push(item);
      }
    );
  }

  public gravar() {
    if (this.formDespesa.invalid) return;

    this.despesaFormVM = Object.assign(
      {},
      this.despesaFormVM,
      this.formDespesa.value
    );
    this.despesaFormVM.categoriasSelecionadas = [];

    this.atribuirCategoriasSelecionadas();

    let resultado = this.despesaService.inserir(this.despesaFormVM).subscribe({
      next: (despesaInserida) => this.processarSucesso(despesaInserida),
      error: (erro) => this.processarFalha(erro),
    });
  }

  private processarSucesso(despesa: FormsDespesaViewModel): void {
    this.router.navigate(['/despesas/listar']);
    this.notificador.mensagemSucesso('Despesa cadastrada com sucesso!');
  }

  private processarFalha(erro: any) {
    if (erro) {
      this.notificador.mensagemErro('Erro ao cadastrar despesa!');
      console.error(erro);
    }
  }
}
