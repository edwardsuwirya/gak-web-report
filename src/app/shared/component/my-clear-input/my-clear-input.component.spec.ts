/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyClearInputComponent } from './my-clear-input.component';

describe('MyClearInputComponent', () => {
  let component: MyClearInputComponent;
  let fixture: ComponentFixture<MyClearInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClearInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClearInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
