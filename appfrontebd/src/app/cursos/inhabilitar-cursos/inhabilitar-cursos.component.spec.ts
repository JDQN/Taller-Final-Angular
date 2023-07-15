import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarCursosComponent } from './inhabilitar-cursos.component';

describe('InhabilitarCursosComponent', () => {
  let component: InhabilitarCursosComponent;
  let fixture: ComponentFixture<InhabilitarCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InhabilitarCursosComponent]
    });
    fixture = TestBed.createComponent(InhabilitarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
