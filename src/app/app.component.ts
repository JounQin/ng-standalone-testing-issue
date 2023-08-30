import { Component } from '@angular/core';
import { PaginatorComponent } from './components/paginator/paginator.component';

@Component({
  selector: 'a-app',
  template: `
    <aui-paginator></aui-paginator>
  `,
  standalone: true,
  imports: [PaginatorComponent],
})
export class AppComponent {}
