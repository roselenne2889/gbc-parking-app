import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClbSpotsComponent } from './clb-spots.component';

describe('ClbSpotsComponent', () => {
  let component: ClbSpotsComponent;
  let fixture: ComponentFixture<ClbSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClbSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClbSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
