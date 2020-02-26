import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLotTimeComponent } from './select-lot-time.component';

describe('SelectLotTimeComponent', () => {
  let component: SelectLotTimeComponent;
  let fixture: ComponentFixture<SelectLotTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLotTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLotTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
