
// Entry point of our application

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AppService} from './services/app.service';

import { AppComponent }  from './app.component';
import { BookComponent } from './components/book/book.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchFilterPipe } from './pipes/search.pipe';
import { CategoryFilterPipe } from './pipes/category.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule ], // Inject built-in modules
  providers:    [ AppService ],
  declarations: [ AppComponent, BookComponent, HeaderComponent, MenuComponent, SidebarComponent, SearchFilterPipe, CategoryFilterPipe ], // Inject your own modules
  bootstrap:    [ AppComponent ] // Module you need to bootstrap
})
export class AppModule { }
