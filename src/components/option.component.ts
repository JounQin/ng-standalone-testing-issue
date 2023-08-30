import { Component } from '@angular/core';

@Component({
  selector: 'a-option',
  template: `<ng-content />`,
  standalone: true,
})
export class OptionComponent {}
