import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertwoPage } from './ordertwo.page';

describe('OrdertwoPage', () => {
  let component: OrdertwoPage;
  let fixture: ComponentFixture<OrdertwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdertwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdertwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
