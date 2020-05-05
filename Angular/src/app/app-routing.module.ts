import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BookFlightsComponent } from './user/book-flights/book-flights.component';
import { MyFlightsComponent } from './user/my-flights/my-flights.component';
import { LoginComponent } from './main/login/login.component';
import { AboutComponent } from './main/about/about.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { SignUpComponent } from './main/sign-up/sign-up.component';
import { PaymentComponent } from './user/payment/payment.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'list',component:ListFlightsComponent},
  {path:'main',component:MainComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},  
    {path:'signUp',component:SignUpComponent},
    {path:'about',component:AboutComponent},
    {path:'**',component:HomeComponent}
  ]
  },
  { path: 'user',component:UserComponent
  ,children: [ 
    {path:'',component:UserHomeComponent},
    {path:'book',component:BookFlightsComponent},
    {path:'my-bookings',component:MyFlightsComponent},
    {path:'user-home',component:UserHomeComponent},
    {path:'payment/:flightId/:name/:age/:gender',component:PaymentComponent},
    {path:'**',component:UserHomeComponent}
  ]},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
