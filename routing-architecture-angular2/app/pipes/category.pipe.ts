import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../../app/mocks/books';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(value: Book[], category: string) {
    if(category === "All") {
      return value;
    }
    return (value) ? value.filter((book: Book) => book.category === category) : value;
  }
}
