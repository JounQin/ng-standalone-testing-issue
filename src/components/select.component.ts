import { Component } from '@angular/core';
import { BaseSelect } from './base.select';

@Component({
  selector: 'a-select',
  template: `<ng-content />`,
  standalone: true,
})
export class SelectComponent extends BaseSelect {}
