import { Component, OnInit } from '@angular/core';
import { UserAddService } from '../../services/user-add.service';
import { Flight } from '../../models/model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'Airline Reservation System';
  flight:Flight ;

  constructor(private service:UserAddService) { }

  ngOnInit() {

    
  }

}
