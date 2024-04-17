import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPagoComponent } from './f-pago.component';

describe('FPagoComponent', () => {
  let component: FPagoComponent;
  let fixture: ComponentFixture<FPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
