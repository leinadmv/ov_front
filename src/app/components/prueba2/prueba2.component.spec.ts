/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Prueba2Component } from './prueba2.component';

describe('Prueba2Component', () => {
  let component: Prueba2Component;
  let fixture: ComponentFixture<Prueba2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prueba2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
