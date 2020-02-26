import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelCompleteComponent } from './cancel-complete.component';

describe('CancelCompleteComponent', () => {
  let component: CancelCompleteComponent;
  let fixture: ComponentFixture<CancelCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
