import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoPComponent } from './metodo-p.component';

describe('MetodoPComponent', () => {
  let component: MetodoPComponent;
  let fixture: ComponentFixture<MetodoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodoPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
