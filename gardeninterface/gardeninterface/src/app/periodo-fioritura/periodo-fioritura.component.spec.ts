import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoFiorituraComponent } from './periodo-fioritura.component';

describe('PeriodoFiorituraComponent', () => {
  let component: PeriodoFiorituraComponent;
  let fixture: ComponentFixture<PeriodoFiorituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoFiorituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoFiorituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
