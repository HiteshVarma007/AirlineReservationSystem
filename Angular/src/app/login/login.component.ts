import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAddService } from '../services/user-add.service';
import { Users, Flight } from '../models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted: boolean;
  user:Users;
  userId: number=0;

  constructor(private route:ActivatedRoute,private formBuilder: FormBuilder,private router: Router,private service:UserAddService) { }


  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      
      username: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.*\\s).{6,10}$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.*\\s).{6,10}$")]],

    });

    localStorage.userId=0;
    sessionStorage.userId=0;

  }

  logIn() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.service.loginValidate(this.loginForm.value.username,this.loginForm.value.password).subscribe(data=>{
      this.userId = data;
      
      if(this.userId > 0)
      {
        localStorage.userId=this.userId;
        sessionStorage.userId=this.userId;
        this.router.navigate(['/user-home',this.userId]);
      
    }
    if(this.userId==0) {
      alert("Invalid Credentials");
      return;
    }
    });
  }



  /*ngOnInit() {
    document.getElementById("login").classList.add("hideme");

      this.addForm = this.formBuilder.group({
      userName: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
     

  }

  loginUser(){
    this.submitted=true;

    if(this.addForm.invalid){
      return;
    }
    console.log(this.addForm.value);
   /* this.userService.createNewUser(this.addForm.value).subscribe(data=>{alert(`${this.addForm.controls.firstName.value} record
    is added successfully ..!`);
    this.router.navigate(['list-user']);},
    err=>{
      console.log(err.stack);
    }
    location.href='/user-home';
  }*/

}
