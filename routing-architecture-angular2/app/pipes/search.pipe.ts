import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../../app/mocks/books';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: Book[], searchTerm: string) {
    if (value) {
      return value.filter((book: Book) => {
        return book.title.toLowerCase().includes(searchTerm) ||
        book.category.toLocaleLowerCase().includes(searchTerm);
      });
    }
    return value;
  }
}
