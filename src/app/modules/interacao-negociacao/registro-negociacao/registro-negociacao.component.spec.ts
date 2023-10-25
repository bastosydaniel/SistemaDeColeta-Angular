import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNegociacaoComponent } from './registro-negociacao.component';

describe('RegistroNegociacaoComponent', () => {
  let component: RegistroNegociacaoComponent;
  let fixture: ComponentFixture<RegistroNegociacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroNegociacaoComponent]
    });
    fixture = TestBed.createComponent(RegistroNegociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
