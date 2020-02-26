import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendReservationComponent } from './extend-reservation.component';

describe('ExtendReservationComponent', () => {
  let component: ExtendReservationComponent;
  let fixture: ComponentFixture<ExtendReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
