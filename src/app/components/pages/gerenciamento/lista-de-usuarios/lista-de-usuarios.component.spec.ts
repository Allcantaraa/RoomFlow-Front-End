import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeUsuariosComponent } from './lista-de-usuarios.component';

describe('ListaDeUsuariosComponent', () => {
  let component: ListaDeUsuariosComponent;
  let fixture: ComponentFixture<ListaDeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDeUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
