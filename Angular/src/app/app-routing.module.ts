import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookFlightsComponent } from './user/book-flights/book-flights.component';
import { MyFlightsComponent } from './user/my-flights/my-flights.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PaymentComponent } from './user/payment/payment.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'list',component:ListFlightsComponent},
  {path:'about',component:AboutComponent},
  {path:'logout',component:HomeComponent},
  {path:'signUp',component:SignUpComponent},
  { path: 'user',component:UserComponent
  ,children: [ 
    {path:'',component:UserHomeComponent},
    {path:'book',component:BookFlightsComponent},
    {path:'my-bookings/:userId',component:MyFlightsComponent},
    {path:'user-home/:userId',component:UserHomeComponent},
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
