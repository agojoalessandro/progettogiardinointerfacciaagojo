import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiorigiardinoComponent } from './fiorigiardino.component';

describe('FiorigiardinoComponent', () => {
  let component: FiorigiardinoComponent;
  let fixture: ComponentFixture<FiorigiardinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiorigiardinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiorigiardinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
