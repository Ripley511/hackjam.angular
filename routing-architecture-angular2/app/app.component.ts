import { Component, OnInit } from '@angular/core';
import { Book, mockBooks } from './mocks/books';
import { mockCategories, Category } from './mocks/categories';
import {AppService} from './services/app.service';

@Component({
  moduleId: module.id,
  selector: 'bookstore',
  templateUrl: '../app/app.template.html'
})

export class AppComponent implements OnInit {
  books: Book[];
  categories: Category[];
  searchTerm: string = "";
  category: string = 'All';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getBooks().then(books => this.books = books);
    this.appService.getCategories().then(categories => this.categories = categories);
  }

  selectBook(book: Book): void {
    console.log('Will be implemented in the next section');
  }

  changeCategory(selectedCategory: Category): void {
    this.category = selectedCategory.name;
    this.categories = this.categories.map(category => {
      if(category === selectedCategory)
        category.selected = true;
      else
        category.selected = false;
      return category;
    });
  }

  setSearchTerm(searchTerm): void {
    this.searchTerm = searchTerm;
  }
}
