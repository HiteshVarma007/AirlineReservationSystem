import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { SignUpComponent } from './main/sign-up/sign-up.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { BookFlightsComponent } from './user/book-flights/book-flights.component';
import { MyFlightsComponent } from './user/my-flights/my-flights.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaymentComponent } from './user/payment/payment.component';
import { UserAddService } from './services/user-add.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ListFlightsComponent,
    BookFlightsComponent,
    MyFlightsComponent,
    HomeComponent,
    AboutComponent,
    UserHomeComponent,
    PaymentComponent,
    UserComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
