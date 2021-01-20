import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  logindata = new FormGroup({
    username: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ])
  })

  constructor( private router:Router )
        {}

  login():void{
    if(this.logindata.value.username == "admin" && this.logindata.value.password == "admin"){
      this.router.navigate(["start"]);
    }else{
      alert("invalid credentials")
    }
  }
}
