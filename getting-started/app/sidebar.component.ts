import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: '../app/sidebar.template.html'
})
export class SidebarComponent {
  navClosed: Boolean = true;
  @Output() search: EventEmitter = new EventEmitter();

  handleSearch() {
    this.search.next(this.term.toLowerCase());
  }
  toggleSideBar(): void {
    this.navClosed = !this.navClosed;
  }
}
