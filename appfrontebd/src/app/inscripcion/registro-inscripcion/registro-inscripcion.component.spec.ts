import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInscripcionComponent } from './registro-inscripcion.component';

describe('RegistroInscripcionComponent', () => {
  let component: RegistroInscripcionComponent;
  let fixture: ComponentFixture<RegistroInscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroInscripcionComponent]
    });
    fixture = TestBed.createComponent(RegistroInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
