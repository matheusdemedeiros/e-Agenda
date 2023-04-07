import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarContatoComponent } from './listar-contato.component';
import { ContatoModule } from '../contato.module';
import { ContatoService } from '../services/contato.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ContatoServiceStub } from 'src/app/test/stubs/contato/services/contato.service.stub';

describe(ListarContatoComponent.name, () => {
  let fixture: ComponentFixture<ListarContatoComponent>;
  let component: ListarContatoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoModule, RouterTestingModule],
      providers: [{ provide: ContatoService, useClass: ContatoServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarContatoComponent);
    component = fixture.componentInstance;
  });

  it('#contatos should contains 3 items', (done) => {
    // Act
    fixture.detectChanges();

    //Assert
    component.contatos$.subscribe((list) => {
      expect(list.length).withContext('should be 3 items in list').toBe(3);
      done();
    });
  });
});
