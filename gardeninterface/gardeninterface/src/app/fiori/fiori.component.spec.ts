import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FioriComponent } from './fiori.component';

describe('FioriComponent', () => {
  let component: FioriComponent;
  let fixture: ComponentFixture<FioriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FioriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FioriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
