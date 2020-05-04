import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight, Users, Booking } from '../models/model';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {

  baseUrl : string = "http://localhost:8094/";

  constructor(private http:HttpClient) { }

  addUser(user:User){
    return this.http.post(this.baseUrl+"/addUser",user); 
    // {responseType:'text' as 'json'}

  }
  getUser(userId:number)
  {
    return this.http.get<Users>(this.baseUrl+"/getUser/"+userId);
  }
  loginValidate(uName:string,password:string)
   {
     return this.http.get<number>(this.baseUrl+"/login/"+uName+"/"+password);
   }

  searchFlight(from:string,to:string)
  {
    return this.http.get<Flight>(this.baseUrl+"searchFlight/"+from+"/"+to);
  }

  bookFlight(flightId:number,userId:number,name: string,age:number,gender:string)
  {
    return this.http.get<boolean>(this.baseUrl+"/bookFlight/"+flightId + "/" + userId + "/"
    + name  + "/" + age + "/" + gender);
  }
  myBookings(userId:number)
  {
    return this.http.get<Booking[]>(this.baseUrl+"/all/"+userId);
  }

  cancelFlight(bookingId:number,flightId:number)
  {
    return this.http.get<boolean>(this.baseUrl+"/cancelFlight/"+bookingId
    +"/"+flightId);
  }
/*  bookFlight1(name1,age1,gender1){
      return this.http.get(this.baseUrl+"bookFlight1/${name1}/${age1}/${gender1}");
      //return 1;
  }
  bookFlight2(name1,age1,gender1,name2,age2,gender2){
    return this.http.get(this.baseUrl+"bookFlight2/"+name1+"/"+age1+"/"+gender1+"/"+name2+"/"+age2+"/"+gender2);
  }
  bookFlight3(name1,age1,gender1,name2,age2,gender2,name3,age3,gender3){
    return this.http.get(this.baseUrl+"bookFlight3/"+name1+"/"+age1+"/"+gender1+"/"+name2+"/"+age2+"/"+gender2+"/"+name3+"/"+age3+"/"+gender3);
  }
  bookFlight4(name1,age1,gender1,name2,age2,gender2,name3,age3,gender3,name4,age4,gender4){
    return this.http.get(this.baseUrl+"bookFlight4/"+name1+"/"+age1+"/"+gender1+"/"+name2+"/"+age2+"/"+gender2+"/"+name3+"/"+age3+"/"+gender3+"/"+name4+"/"+age4+"/"+gender4);
  }*/
}

// signUp : boolean;
// baseUrl : string = "http://localhost:8094/";
// constructor(private http : HttpClient) { }

// addUser(user:Users){
//   return this.http.post(this.baseUrl+"/addUser",user);
// }

// loginValidate(uName:string,password:string)
// {
//   return this.http.get<number>(this.baseUrl+"/login/"+uName+"/"+password);
// }

// getUser(userId:number)
// {
//   return this.http.get<Users>(this.baseUrl+"/getUser/"+userId);
// }

// searchFlight(from:string,to:string)
// {
//   return this.http.get<Flight>(this.baseUrl+"/searchFlight/"+from+"/"+to);
// }

// bookFlight(flightId:number,userId:number,name: string,age:string,gender:string)
// {
//   return this.http.get<boolean>(this.baseUrl+"/bookFlight/"+flightId + "/" + userId + "/"
//   + name  + "/" + age + "/" + gender);
// }

// myBookings(userId:number)
// {
//   return this.http.get<Booking[]>(this.baseUrl+"/all/"+userId);
// }

// cancelFlight(bookingId:number,flightId:number)
// {
//   return this.http.get<boolean>(this.baseUrl+"/cancelFlight/"+bookingId
//   +"/"+flightId);
// }
