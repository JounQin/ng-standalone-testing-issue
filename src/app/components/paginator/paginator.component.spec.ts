import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from '../select/select.component';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should render current template', () => {
    expect(fixture).toMatchSnapshot();
  });
});

@Component({
  template: `
    <aui-paginator />
  `,
  standalone: true,
  imports: [
    PaginatorComponent,
    // SelectComponent
  ],
})
class TestComponent {}
