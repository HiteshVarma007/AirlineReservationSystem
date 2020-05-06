import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/model';
import { UserAddService } from '../../services/user-add.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css']
})
/*export class BookFlightsComponent implements OnInit {
  
  addForm: FormGroup;
  numberForm: FormGroup;
  flight:Flight ;
  from: string = '';
  to: string = '';
  f: boolean = false;
  searchDiv: boolean = false;
  submitted: boolean = false;
  addPass: boolean = false;
  payment: boolean = false;
  addPass3: boolean = false;
  addPass4: boolean = false;
  
  r1:number;

  name: string;
  age: string;
  gender: string;
  name2: string;
  age2: string;
  gender2: string;
  name3: string;
  age3: string;
  gender3: string;
  name4: string;
  age4: string;
  gender4: string;

  constructor(private service:UserAddService,private router: Router) { }

  ngOnInit() {

    let from=((document.getElementById("fromCity") as HTMLInputElement).value)
    let to=((document.getElementById("toCity") as HTMLInputElement).value)
    this.service.searchFlight(from,to).subscribe(data=>{ this.flight = data
      this.flight=data;
      console.log(this.flight);
      })
  }
  searchFlight() {

    if (this.from == "" || this.to == "") {
      alert("Please select the cities first")
    }
    else if (this.from == this.to) {
      alert("Both cities cannot be same.");
    }
    else {

      this.searchDiv = true;
      console.log(this.from + this.to);
      this.service.searchFlight(this.from, this.to).subscribe(data => this.flight = data);

      console.log(this.flight);
      this.f = true;

    }
   

  }


  bookFlight() {
    this.searchDiv=false;
    let n=((document.getElementById("passengers") as HTMLInputElement).value)
    if(n=="1")
    this.addPass = true;

  }

  selectChangeHandler(event: any) {
    this.from = event.target.value;
  }

  selectChangeHandler2(event: any) {
  
    this.to = event.target.value;
  
  }

  selectChangeHandler3(event: any) {
    
    this.gender = event.target.value;
  
  }


  addPassenger(){
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }

    console.log(this.addForm.controls.name.value);

    this.name = this.addForm.controls.name.value;

    this.age = this.addForm.controls.age.value;

    this.gender = this.addForm.controls.gender.value;

    this.payment=true;
  }

  /*addPassenger1() {
    this.submitted = true;

    if(this.addPass1==true)
    {   
      this.name1 = this.addForm.controls.name1.value;
      this.age1 = this.addForm.controls.age1.value;
      this.gender1 = this.addForm.controls.gender1.value;


      this.service.withdraw(this.username,this.password,this.amount).subscribe(  
        response=>{
          return this.handleresponse(response);
        }, 
        error=>{
          this.handleerror(error)});

      this.service.bookFlight1(this.name1,this.age1,this.gender1).subscribe(data=>{ this.handleresponse(data);
        });
    }
    

    if(this.addPass2)
    {   
      this.name1 = this.addForm.controls.name1.value;
      this.age1 = this.addForm.controls.age1.value;
      this.gender1 = this.addForm.controls.gender1.value;

      this.name2 = this.addForm.controls.name2.value;
      this.age2 = this.addForm.controls.age2.value;
      this.gender2 = this.addForm.controls.gender2.value;

      this.service.bookFlight2(this.name1,this.age1,this.gender1,this.name2,this.age2,this.gender2).subscribe
      (data=>{ return  this.handleresponse(data);

        });
    }

    if(this.addPass3)
    {   
      this.name1 = this.addForm.controls.name1.value;
      this.age1 = this.addForm.controls.age1.value;
      this.gender1 = this.addForm.controls.gender1.value;

      this.name2 = this.addForm.controls.name2.value;
      this.age2 = this.addForm.controls.age2.value;
      this.gender2 = this.addForm.controls.gender2.value;

      this.name3 = this.addForm.controls.name3.value;
      this.age3 = this.addForm.controls.age3.value;
      this.gender3 = this.addForm.controls.gender3.value;

      this.service.bookFlight3(this.name1,this.age1,this.gender1,this.name2,this.age2,this.gender2,this.name3,this.age3,this.gender3).
      subscribe(data=>{ return  this.handleresponse(data);
        console.log(this.r1);
        });
    }
    if(this.addPass4)
    {   
      this.name1 = this.addForm.controls.name1.value;
      this.age1 = this.addForm.controls.age1.value;
      this.gender1 = this.addForm.controls.gender1.value;

      this.name2 = this.addForm.controls.name2.value;
      this.age2 = this.addForm.controls.age2.value;
      this.gender2 = this.addForm.controls.gender2.value;

      this.name3 = this.addForm.controls.name3.value;
      this.age3 = this.addForm.controls.age3.value;
      this.gender3 = this.addForm.controls.gender3.value;

      this.name4 = this.addForm.controls.name4.value;
      this.age4 = this.addForm.controls.age4.value;
      this.gender4 = this.addForm.controls.gender4.value;

      this.service.bookFlight4(this.name1,this.age1,this.gender1,this.name2,this.age2,this.gender2,this.name3,this.age3,this.gender3,this.name4,this.age4,this.gender4).
      subscribe(data=>{ return  this.handleresponse(data);
        console.log(this.r1);
        });
    }
  }
  handleresponse(response){
    this.r1=response;
    if(this.r1==0)
    {
      alert("Not entered");
    
  }
  else{
    alert("Entered");
  }
  }

}*/
export class BookFlightsComponent implements OnInit {

  flight: Flight;
  from: string = '';
  to: string = '';
  f: boolean = false;
  addPass: boolean = false;
  searchDiv: boolean = true;
  submitted: boolean;
  addForm: FormGroup;

  name: string;
  age: number;
  gender: string;

  constructor(private formBuilder: FormBuilder, private flightService: UserAddService, private router: Router) { }

  ngOnInit() {

    
    if (localStorage.userId != 0) {
      this.addForm = this.formBuilder.group({
//        name: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],
        gender: ['', Validators.required],
      });
    }
    else {
        alert("Redirecting to payment page");
    }

  }

 
  
  searchFlight() {

    if (this.from == "" || this.to == "") {
      alert("Please select the cities first")
    }
    else if (this.from == this.to) {
      alert("Both cities cannot be same.");
    }
    else {

      this.searchDiv = false;
      console.log(this.from + this.to);
      this.flightService.searchFlight(this.from, this.to).subscribe(data => this.flight = data);

      console.log(this.flight);
      this.f = true;

    }
   

  }

  bookFlight() {
    this.addPass = true;
  }
  addPassenger() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    localStorage.from=this.from;
    localStorage.to=this.to;
    console.log(this.addForm.controls.firstName.value);

    this.name = this.addForm.controls.firstName.value + " " + this.addForm.controls.lastName.value;

    this.age = this.addForm.controls.age.value;

    this.gender = this.addForm.controls.gender.value;
    localStorage.flightId=this.flight.flightId;
    localStorage.name=this.name;
    localStorage.age=this.age;
    localStorage.gender=this.gender;
    alert("Updated Price is "+this.flight.totalFare);
    this.router.navigate(['/user/payment']);

  }

}

