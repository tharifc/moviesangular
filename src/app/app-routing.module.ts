import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreviewComponent } from './addreview/addreview.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"movies",component:MovielistComponent},
  {path:"moviedetails/:id",component:MoviedetailsComponent},
  {path:"movie/add_review/:id",component:AddreviewComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
