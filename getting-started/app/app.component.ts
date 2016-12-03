import { Component } from '@angular/core';
import { Book, mockBooks } from '../app/mocks/books';
import { mockCategories, Category } from '../app/mocks/categories';

@Component({
  selector: 'bookstore',
  templateUrl: '../app/app.template.html'
})

export class AppComponent {
  books: Book [] = mockBooks;
  categories: Category [] = mockCategories;

  selectCategory(category: Category): void {
    if (category.name !== 'All') {
      this.books = mockBooks.filter((book: Book) => book.category === category.name);
    } else {
      this.books = mockBooks;
    }
    this.categories = mockCategories.map((cat: Category) => {
      cat.selected = cat.name === category.name;
      return cat;
    });
  }

  clicked() {
    console.log('Will be implemented in the next section');
  }

  search(term: string): void {
    if (term && term.length > 2) {
      this.books = mockBooks.filter((book: Book) => {
        if (book.title.toLowerCase().indexOf(term) >= 0 || book.category.toLowerCase().indexOf(term) >= 0) {
          return book;
        }
      });
    } else {
      this.books = mockBooks;
    }
  }
}
