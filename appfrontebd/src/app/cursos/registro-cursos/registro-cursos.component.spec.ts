import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCursosComponent } from './registro-cursos.component';

describe('RegistroCursosComponent', () => {
  let component: RegistroCursosComponent;
  let fixture: ComponentFixture<RegistroCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCursosComponent]
    });
    fixture = TestBed.createComponent(RegistroCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
