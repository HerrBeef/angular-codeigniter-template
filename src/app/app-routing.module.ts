import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MovielistComponent } from './movielist/movielist.component';
import { CreateMovieComponent } from './createmovie/create-movie.component';


const routes: Routes = [
  {
    path: 'authentification', component: AuthentificationComponent
  },
  {
    path: 'users', component: UserlistComponent
  },
  {
    path: 'movies', component: MovielistComponent,
  },
  {
    path: 'createmovie', component: CreateMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
