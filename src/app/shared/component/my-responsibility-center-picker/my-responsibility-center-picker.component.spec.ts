/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyResponsibilityCenterPickerComponent } from './my-responsibility-center-picker.component';

describe('MyResponsibilityCenterPickerComponent', () => {
  let component: MyResponsibilityCenterPickerComponent;
  let fixture: ComponentFixture<MyResponsibilityCenterPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResponsibilityCenterPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResponsibilityCenterPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
