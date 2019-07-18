import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  
  {
    path: "home",
    component: HomeComponent,
    children: [ { path: "", component: HomeComponent } ]
  },

  { path: 'login', component: LoginComponent },
  
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
