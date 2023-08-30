import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { OptionComponent } from '../select/option/option.component';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'aui-paginator',
  templateUrl: 'paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  standalone: true,
  imports: [NgFor, SelectComponent, OptionComponent],
})
export class PaginatorComponent {
  pageSizeOptions = [20, 50, 100];
}
