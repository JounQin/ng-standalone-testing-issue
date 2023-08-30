import { ContentChildren, Directive, QueryList } from '@angular/core';

import { OptionComponent } from './option/option.component';

@Directive({
  standalone: true,
})
export abstract class BaseSelect<T, V = T> {
  @ContentChildren(OptionComponent, { descendants: true })
  contentOptions: QueryList<OptionComponent<T>>;
}
