import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateFeesComponent } from './late-fees.component';

describe('LateFeesComponent', () => {
  let component: LateFeesComponent;
  let fixture: ComponentFixture<LateFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
