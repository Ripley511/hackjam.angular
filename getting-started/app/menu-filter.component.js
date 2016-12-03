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
var MenuFilterComponent = (function () {
    function MenuFilterComponent() {
        this.selectCategory = new core_1.EventEmitter();
    }
    MenuFilterComponent.prototype.handleSelectCategory = function (category) {
        this.selectCategory.next(category);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MenuFilterComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MenuFilterComponent.prototype, "selectCategory", void 0);
    MenuFilterComponent = __decorate([
        core_1.Component({
            selector: 'menu-filter',
            templateUrl: '../app/menu-filter.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MenuFilterComponent);
    return MenuFilterComponent;
}());
exports.MenuFilterComponent = MenuFilterComponent;
//# sourceMappingURL=menu-filter.component.js.map