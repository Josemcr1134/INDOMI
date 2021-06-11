import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManDataBaseComponent } from './delivery-man-data-base.component';

describe('DeliveryManDataBaseComponent', () => {
  let component: DeliveryManDataBaseComponent;
  let fixture: ComponentFixture<DeliveryManDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryManDataBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryManDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
