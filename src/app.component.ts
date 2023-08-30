import { Component } from '@angular/core';
import { PaginatorComponent } from './components/paginator.component';

@Component({
  selector: 'a-app',
  template: `<a-paginator />`,
  standalone: true,
  imports: [PaginatorComponent],
})
export class AppComponent {}
