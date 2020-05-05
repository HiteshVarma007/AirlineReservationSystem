import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAddService } from '../../services/user-add.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.css']
})
export class MyFlightsComponent implements OnInit {

  bookings:Booking[];
  booked:boolean = false;
  load:boolean = false;
  userId: number;
  

  constructor(private route:ActivatedRoute,private router:Router,private flightService:UserAddService) { }
 
  ngOnInit() {
    
    this.getbookings();
    // if(localStorage.username!=null){
     
    // }
    // else{
    //   this.router.navigate(['/login']);
    // }
  }
  getbookings() {
    //localStorage.userId = 1;
    this.flightService.myBookings(localStorage.userId).subscribe(data => {
      // on resolve or on success
      
      console.log(localStorage.userId);
      this.bookings=data;
      console.log(this.bookings.length);
      if(this.bookings.length==0)
      {this.booked = true;}
    },
    /*this.flightService.myBookings(localStorage.userId).subscribe(data => {
      // on resolve or on success
      console.log(localStorage.userId);
      this.bookings=data;
      console.log(this.bookings);
      this.booked = false;
    },*/
      err => {
        // on reject or on error
        console.log(err.stack);
      });
  }

  cancelFlight(bookingId:number,flightId:number)
  {
    this.flightService.cancelFlight(bookingId,flightId).subscribe();
    alert("Flight cancelled succesfully");
    window.location.reload();
    //this.router.navigate(['/main/bookings']);
    
  }

}
