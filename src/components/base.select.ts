import {
  AfterViewInit,
  Directive,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { startWith } from 'rxjs';
import { OptionComponent } from './option.component';

@Directive({
  standalone: true,
})
export class BaseSelect implements AfterViewInit {
  @ViewChildren(OptionComponent)
  customOptions!: QueryList<OptionComponent>;

  ngAfterViewInit() {
    this.customOptions.changes
      .pipe(startWith(this.customOptions))
      .subscribe(() => {
        console.log(this.customOptions);
      });
  }
}
