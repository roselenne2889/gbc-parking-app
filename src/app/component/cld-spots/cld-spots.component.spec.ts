import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CldSpotsComponent } from './cld-spots.component';

describe('CldSpotsComponent', () => {
  let component: CldSpotsComponent;
  let fixture: ComponentFixture<CldSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CldSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CldSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
