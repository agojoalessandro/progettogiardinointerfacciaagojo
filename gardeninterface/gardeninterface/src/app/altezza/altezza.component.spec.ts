import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltezzaComponent } from './altezza.component';

describe('AltezzaComponent', () => {
  let component: AltezzaComponent;
  let fixture: ComponentFixture<AltezzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltezzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltezzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
