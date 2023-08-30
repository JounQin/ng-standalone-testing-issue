import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';

import { BaseSelect } from '../base-select';

@Component({
  selector: 'aui-option',
  templateUrl: './option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  standalone: true,
})
export class OptionComponent<T> {
  @Input()
  value: T;

  private readonly select: BaseSelect<T>;

  constructor(
    @Inject(forwardRef(() => BaseSelect))
    select: BaseSelect<T>,
  ) {
    this.select = select;
  }
}
