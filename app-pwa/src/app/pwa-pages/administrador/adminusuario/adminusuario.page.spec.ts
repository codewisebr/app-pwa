import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusuarioPage } from './adminusuario.page';

describe('AdminusuarioPage', () => {
  let component: AdminusuarioPage;
  let fixture: ComponentFixture<AdminusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminusuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
