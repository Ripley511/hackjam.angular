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
var app_service_1 = require('./services/app.service');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.navClosed = true;
    }
    AppComponent.prototype.getBookDetails = function () {
        console.log('Will be implemented in the next section');
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getBooks().then(function (books) { return _this.books = books; });
        this.appService.getCategories().then(function (categories) { return _this.categories = categories; });
        this.changeCategory = this.changeCategory.bind(this);
    };
    AppComponent.prototype.changeCategory = function (selectedCategory) {
        this.categories = this.categories.map(function (category) {
            if (category === selectedCategory)
                category.selected = true;
            else
                category.selected = false;
            return category;
        });
        this.filterBooks(selectedCategory);
    };
    AppComponent.prototype.filterBooks = function (category) {
        var _this = this;
        if (category.name === "All") {
            // this.books = this.appService.getBooks();
            this.appService.getCategories().then(function (categories) { return _this.categories = categories; });
            return;
        }
        this.books = this.appService.getBooks().filter(function (book) { return book.category === category.name; });
    };
    AppComponent.prototype.search = function (searchTerm) {
        this.books = this.appService.getBooks().filter(function (book) {
            searchTerm = searchTerm.toLowerCase();
            return book.title.toLowerCase().includes(searchTerm) ||
                book.category.toLocaleLowerCase().includes(searchTerm);
        });
    };
    AppComponent.prototype.toggleSidebar = function (open) {
        this.navClosed = open;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookstore',
            templateUrl: 'app.template.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map