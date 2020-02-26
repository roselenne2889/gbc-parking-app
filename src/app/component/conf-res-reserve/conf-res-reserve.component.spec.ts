import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfResReserveComponent } from './conf-res-reserve.component';

describe('ConfResReserveComponent', () => {
  let component: ConfResReserveComponent;
  let fixture: ComponentFixture<ConfResReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfResReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfResReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
