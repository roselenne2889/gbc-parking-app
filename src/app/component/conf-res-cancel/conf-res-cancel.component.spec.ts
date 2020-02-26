import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfResCancelComponent } from './conf-res-cancel.component';

describe('ConfResCancelComponent', () => {
  let component: ConfResCancelComponent;
  let fixture: ComponentFixture<ConfResCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfResCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfResCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
