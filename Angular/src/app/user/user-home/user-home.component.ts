import { Component, OnInit } from '@angular/core';
import { UserAddService } from '../../services/user-add.service';
import { Users } from '../../models/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  title = 'Airline Reservation System';
  userId: number;
  user: Users;
  constructor(private route:ActivatedRoute,private service:UserAddService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.userId=params['userId'];
    })
    this.service.getUser(this.userId).subscribe(data=>{this.user=data});
  }

}
