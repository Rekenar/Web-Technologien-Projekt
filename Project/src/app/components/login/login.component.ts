import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../core/task.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata: FormGroup;

  constructor(private accountservice:TaskService, private _router: Router){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.logindata = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }

  loginProcess(){
    if(this.logindata.valid){
      this.accountservice.login(this.logindata.value).subscribe(result=>{
        localStorage.setItem("token", result.token)
        if(result.token == undefined){
          alert("Invalid credentials")
        }else{
          this._router.navigate(["/start"])
        }

      }, err =>{
        console.log(err)
      })
    }
  }
}