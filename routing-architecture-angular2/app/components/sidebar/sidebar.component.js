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
var SideBarComponent = (function () {
    function SideBarComponent() {
        this.sidebarHasBeenToggled = new core_1.EventEmitter();
        this.searchTermChanged = new core_1.EventEmitter();
        this.navClosed = true;
    }
    SideBarComponent.prototype.toggleSideBar = function () {
        this.navClosed = !this.navClosed;
        this.sidebarHasBeenToggled.emit(this.navClosed);
    };
    SideBarComponent.prototype.search = function (searchTerm) {
        this.searchTermChanged.emit(searchTerm);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SideBarComponent.prototype, "sidebarHasBeenToggled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SideBarComponent.prototype, "searchTermChanged", void 0);
    SideBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-sidebar',
            templateUrl: 'sidebar.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=sidebar.component.js.map