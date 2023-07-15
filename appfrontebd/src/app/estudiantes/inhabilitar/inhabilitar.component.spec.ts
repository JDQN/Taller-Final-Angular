import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarComponent } from './inhabilitar.component';

describe('InhabilitarComponent', () => {
  let component: InhabilitarComponent;
  let fixture: ComponentFixture<InhabilitarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InhabilitarComponent]
    });
    fixture = TestBed.createComponent(InhabilitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
