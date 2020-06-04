import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { ExamplelistComponent } from './components/examplelist/examplelist.component';


const routes: Routes = [
  {
    path: 'authentification', component: AuthentificationComponent
  },
  {
    path: 'examples', component: ExamplelistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
