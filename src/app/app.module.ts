import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component'; 
import { MoviesComponent } from './movies/movies.component';
import { DataListModule } from './modules/data-list/data-list.module';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }