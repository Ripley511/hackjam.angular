"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var books_1 = require('../app/mocks/books');
var categories_1 = require('../app/mocks/categories');
var AppComponent = (function () {
    function AppComponent() {
        this.books = books_1.mockBooks;
        this.categories = categories_1.mockCategories;
    }
    AppComponent.prototype.selectCategory = function (category) {
        if (category.name !== 'All') {
            this.books = books_1.mockBooks.filter(function (book) { return book.category === category.name; });
        }
        else {
            this.books = books_1.mockBooks;
        }
        this.categories = categories_1.mockCategories.map(function (cat) {
            cat.selected = cat.name === category.name;
            return cat;
        });
    };
    AppComponent.prototype.clicked = function () {
        console.log('Will be implemented in the next section');
    };
    AppComponent.prototype.search = function (term) {
        if (term && term.length > 2) {
            this.books = books_1.mockBooks.filter(function (book) {
                if (book.title.toLowerCase().indexOf(term) >= 0 || book.category.toLowerCase().indexOf(term) >= 0) {
                    return book;
                }
            });
        }
        else {
            this.books = books_1.mockBooks;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'bookstore',
            templateUrl: '../app/app.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map