import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityDetailedComponent } from './commodity-detailed.component';

describe('CommodityDetailedComponent', () => {
  let component: CommodityDetailedComponent;
  let fixture: ComponentFixture<CommodityDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
