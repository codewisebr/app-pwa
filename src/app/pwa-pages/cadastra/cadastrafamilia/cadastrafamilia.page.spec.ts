import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrafamiliaPage } from './cadastrafamilia.page';

describe('CadastrafamiliaPage', () => {
  let component: CadastrafamiliaPage;
  let fixture: ComponentFixture<CadastrafamiliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrafamiliaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrafamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
