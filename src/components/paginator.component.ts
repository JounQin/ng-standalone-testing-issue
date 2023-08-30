import { Component } from '@angular/core';
import { OptionComponent } from './option.component';
import { SelectComponent } from './select.component';

@Component({
  selector: 'a-paginator',
  template: `
  <a-select>
    <a-option>1</a-option>
    <a-option>2</a-option>
  </a-select>
  `,
  standalone: true,
  imports: [SelectComponent, OptionComponent],
})
export class PaginatorComponent {}
