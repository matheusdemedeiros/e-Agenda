import { VisualizarCategoriaViewModel } from 'src/app/categorias/view-models/visualizar-categoria.view-model';

export class VisualizarDespesaViewModel {
  id: string;
  descricao: string;
  valor: number;
  data: Date;
  formaPagamento: string;
  categorias: VisualizarCategoriaViewModel[] = [];
}
