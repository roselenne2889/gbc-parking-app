import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcSpotsComponent } from './clc-spots.component';

describe('ClcSpotsComponent', () => {
  let component: ClcSpotsComponent;
  let fixture: ComponentFixture<ClcSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClcSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClcSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
