import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAddService } from '../../services/user-add.service';
import { Flight } from '../../models/model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  flightId : number;
  name: string;
  age:number;
  gender:string;
  payForm : FormGroup;

  submitted:boolean = false;
  result:boolean;

  constructor(private route:ActivatedRoute,private flightService:UserAddService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.flightId=params['flightId'];
    })
    this.route.params.subscribe(params=>{
      this.name=params['name'];
    })
      this.route.params.subscribe(params=>{
        this.age=params['age'];
      })
        this.route.params.subscribe(params=>{
          this.gender=params['gender'];
        })    
        
    this.payForm=this.formBuilder.group({
      
      owner: ['', [Validators.required]],
      cvv: ['', [Validators.required,Validators.pattern("[0-9]{3}")]],
      cardNumber : ['',[Validators.required,Validators.pattern("[0-9]{16}")]]

    });
    

  }

  bookFlight()
  {
      this.submitted = true;
      if(this.payForm.invalid)
      {
        return;
      }
    // alert(localStorage.userId);
      this.flightService.bookFlight(this.flightId,localStorage.userId,this.name,this.age,this.gender).subscribe(data=> {

      this.result = data;
      if(this.result)
      {
        // setTimeout(function(){alert("booking Succesful");},3000);
        alert("booking Succesful");
      }
      else{
        alert("Booking Failed");
      }
          },
      err => {
     
      });
      
      this.router.navigate(['/user/my-bookings/'+localStorage.userId]);
  
  }

}
