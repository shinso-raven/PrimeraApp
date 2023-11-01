import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroProductoComponent } from './libro-producto.component';

describe('LibroProductoComponent', () => {
  let component: LibroProductoComponent;
  let fixture: ComponentFixture<LibroProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroProductoComponent]
    });
    fixture = TestBed.createComponent(LibroProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
