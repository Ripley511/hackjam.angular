import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from '../app/mocks/books';

@Component({
  selector: 'gallery',
  templateUrl: '../app/gallery.template.html'
})
export class GalleryComponent {
  @Input() books: Book[];
  @Output() selectBook: EventEmitter = new EventEmitter();

  handleSelectBook(book, evt) {
    this.selectBook.next(book);
  }
}
