import { CategoriaSelecionadaViewModel } from './categoria-selecionda.view-model';

export class FormsDespesaViewModel {
  id: string;
  descricao: string;
  valor: number;
  data: Date;
  formaPagamento: number;
  categoriasSelecionadas: CategoriaSelecionadaViewModel[] = [];
}
