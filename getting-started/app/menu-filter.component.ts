import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Category} from '../app/mocks/categories';

@Component({
  selector: 'menu-filter',
  templateUrl: '../app/menu-filter.template.html'
})
export class MenuFilterComponent {
  @Input() categories: Category[];
  @Output() selectCategory: EventEmitter = new EventEmitter();

  handleSelectCategory(category) {
    this.selectCategory.next(category);
  }
}
