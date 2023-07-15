import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCursosComponent } from './ver-cursos.component';

describe('VerCursosComponent', () => {
  let component: VerCursosComponent;
  let fixture: ComponentFixture<VerCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCursosComponent]
    });
    fixture = TestBed.createComponent(VerCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
