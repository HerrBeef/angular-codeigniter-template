import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MovielistComponent } from './movielist/movielist.component';


const routes: Routes = [
  {
    path: 'authentification', component: AuthentificationComponent
  },
  {
    path: 'users', component: UserlistComponent
  },
  {
    path: 'movies', component: MovielistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
