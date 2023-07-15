import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursosComponent } from './editar-cursos.component';

describe('EditarCursosComponent', () => {
  let component: EditarCursosComponent;
  let fixture: ComponentFixture<EditarCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCursosComponent]
    });
    fixture = TestBed.createComponent(EditarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
