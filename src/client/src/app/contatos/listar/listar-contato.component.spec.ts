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

  it('(D) Should render HTML when component init', () => {
    // Arrange

    //Act
    fixture.detectChanges();

    const table: HTMLTableElement = fixture.nativeElement.querySelector('.table');

    //Assert
    expect(table.rows.length).toBe(4);
    expect(table.rows[0].cells[0].innerText).toBe('Nome');
    expect(table.rows[0].cells[1].innerText).toBe('Email');
    expect(table.rows[0].cells[2].innerText).toBe('Telefone');
  })

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
