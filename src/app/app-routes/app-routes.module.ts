import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

const appRoutes:Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'**', component:HomeComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutesModule {  

 }
