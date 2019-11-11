import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisrelatorioPage } from './hisrelatorio.page';

describe('HisrelatorioPage', () => {
  let component: HisrelatorioPage;
  let fixture: ComponentFixture<HisrelatorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisrelatorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisrelatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
