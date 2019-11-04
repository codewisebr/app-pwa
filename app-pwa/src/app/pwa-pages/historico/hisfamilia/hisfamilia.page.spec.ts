import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisfamiliaPage } from './hisfamilia.page';

describe('HisfamiliaPage', () => {
  let component: HisfamiliaPage;
  let fixture: ComponentFixture<HisfamiliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisfamiliaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisfamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
