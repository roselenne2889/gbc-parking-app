import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtResCompleteComponent } from './ext-res-complete.component';

describe('ExtResCompleteComponent', () => {
  let component: ExtResCompleteComponent;
  let fixture: ComponentFixture<ExtResCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtResCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtResCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
