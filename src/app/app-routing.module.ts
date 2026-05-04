import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListViewComponent } from './modules/data-list/data-list-view/data-list-view.component';
import { CarsComponent } from './cars/cars.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'list', component: DataListViewComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }