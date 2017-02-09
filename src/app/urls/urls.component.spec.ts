/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrlsComponent } from './urls.component';

describe('UrlsComponent', () => {
  let component: UrlsComponent;
  let fixture: ComponentFixture<UrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
