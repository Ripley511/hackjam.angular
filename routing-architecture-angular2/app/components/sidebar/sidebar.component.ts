import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: '../../app/components/sidebar/sidebar.template.html'
})
export class SidebarComponent {
  @Output() search: EventEmitter = new EventEmitter();
  navClosed: Boolean = true;

  toggleSideBar(): void {
    this.navClosed = !this.navClosed;
  }

  handleSearch() {
    this.search.next(this.term.toLowerCase());
  }
}
