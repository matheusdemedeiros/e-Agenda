import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';
import { FormsContatoViewModel } from 'src/app/contatos/view-models/forms-contato.view-model';
import { ListarContatoViewModel } from 'src/app/contatos/view-models/listar-contato.view-model';

@Injectable()
export class ContatoServiceStub {
  private apiUrl: string;
  private http: HttpClient;
  private localStorageService: LocalStorageService;

  private valueObject: FormsContatoViewModel = {
    id: 'mock-id',
    nome: 'mock-name',
    email: 'mock-email',
    telefone: 'mock-phone',
    empresa: 'mock-company',
    cargo: 'mock-role',
  };

  public inserir(
    contato: FormsContatoViewModel
  ): Observable<FormsContatoViewModel> {
    return of(this.valueObject);
  }

  public editar(
    contato: FormsContatoViewModel
  ): Observable<FormsContatoViewModel> {
    return of(this.valueObject);
  }

  public excluir(id: string): Observable<string> {
    return of('entity deleted');
  }

  public selecionarTodos(): Observable<ListarContatoViewModel[]> {
    let list: ListarContatoViewModel[] = [];

    for (let i = 0; i < 3; i++) {
      list.push(this.valueObject);
    }

    return of(list);
  }
}
