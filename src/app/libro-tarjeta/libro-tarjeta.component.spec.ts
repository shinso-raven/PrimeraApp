import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroTarjetaComponent } from './libro-tarjeta.component';

describe('LibroTarjetaComponent', () => {
  let component: LibroTarjetaComponent;
  let fixture: ComponentFixture<LibroTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroTarjetaComponent]
    });
    fixture = TestBed.createComponent(LibroTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
