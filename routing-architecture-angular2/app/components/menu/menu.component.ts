import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Category} from '../../app/mocks/categories';

@Component({
  selector: 'menu',
  templateUrl: '../../app/components/menu/menu.template.html'
})
export class MenuComponent {
  @Input() categories: Category[];
  @Output() selectCategory: EventEmitter = new EventEmitter();

  handleSelectCategory(category: Category) {
    this.selectCategory.next(category);
  }
}
