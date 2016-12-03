import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from '../../app/mocks/books';

@Component({
  selector: 'book',
  templateUrl: '../../app/components/book/book.template.html'
})
export class BookComponent {
  @Input() books: Book[];
  @Output() selectBook: EventEmitter = new EventEmitter();

  handleSelectBook(book: Book) {
    this.selectBook.next(book);
  }
}
