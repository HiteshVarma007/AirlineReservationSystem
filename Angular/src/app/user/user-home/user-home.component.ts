import { Component, OnInit } from '@angular/core';
import { UserAddService } from '../../services/user-add.service';
import { Users } from '../../models/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  title = 'Airline Reservation System';
  userId: number;
  user: Users;
  constructor(private route:ActivatedRoute,private router: Router,private service:UserAddService) { }

  ngOnInit() {
    
    this.service.getUser(localStorage.userId).subscribe(data=>{this.user=data});
    console.log(localStorage.userId);
  }
  myBooking(){
    this.router.navigate(['/user/my-bookings']);
  }

}
