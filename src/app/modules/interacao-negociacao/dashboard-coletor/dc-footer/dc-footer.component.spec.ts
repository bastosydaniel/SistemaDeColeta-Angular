import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFooterComponent } from './dc-footer.component';

describe('DcFooterComponent', () => {
  let component: DcFooterComponent;
  let fixture: ComponentFixture<DcFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcFooterComponent]
    });
    fixture = TestBed.createComponent(DcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
