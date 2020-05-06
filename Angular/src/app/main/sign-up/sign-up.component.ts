import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { UserAddService } from '../../services/user-add.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  addForm : FormGroup;
  submitted: boolean;

  user: User=new User("","","","","",0);
  message: any;
  
  constructor(private formBuilder: FormBuilder,private router: Router,private service:UserAddService) { }


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("[A-Z][a-z\\s*A-Z]*\\s*")]],
      city: ['', [Validators.required]],
      phoneNum: ['', [Validators.required, Validators.pattern("[6-9][0-9]{9}")]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.*\\s).{6,10}$")]],
      password: ['', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.*\\s).{6,10}$")]],

    });
  }

  signUp() {

    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.user = this.addForm.value;

    this.service.addUser(this.user).subscribe(data => {

      this.router.navigate(['/main/login']);     
      alert("Account succesfully created");

    }, err => {
      console.log(err.stack);
    });
  }

}
