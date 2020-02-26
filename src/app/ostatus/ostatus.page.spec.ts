import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstatusPage } from './ostatus.page';

describe('OstatusPage', () => {
  let component: OstatusPage;
  let fixture: ComponentFixture<OstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
