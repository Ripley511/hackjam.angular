
// Entry point of our application

import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { MenuFilterComponent } from './menu-filter.component';
import { GalleryComponent } from './gallery.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], // Inject built-in modules
  declarations: [ AppComponent, HeaderComponent, MenuFilterComponent, GalleryComponent, SidebarComponent ], // Inject your own modules
  bootstrap:    [ AppComponent ] // Module you need to bootstrap
})
export class AppModule { }
