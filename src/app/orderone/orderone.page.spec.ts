import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderonePage } from './orderone.page';

describe('OrderonePage', () => {
  let component: OrderonePage;
  let fixture: ComponentFixture<OrderonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
