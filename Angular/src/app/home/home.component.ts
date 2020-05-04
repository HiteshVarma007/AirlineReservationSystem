import { Component, OnInit } from '@angular/core';
import { UserAddService } from '../services/user-add.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Airline Reservation System';

  constructor(private service: UserAddService) { }

  ngOnInit() {

  }

}
