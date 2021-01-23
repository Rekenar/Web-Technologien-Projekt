import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../core/task.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerdata: FormGroup;

  constructor(private accountservice: TaskService, private _router: Router) { }

  ngOnInit(): void {
    console.log("Register Init")
    this.initForm();
  }

  initForm() {
    this.registerdata = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  registerProcess() {
    if (this.registerdata.valid) {
      this.accountservice.register(this.registerdata.value).subscribe(result => {
        localStorage.setItem("token", result.token)
        if (result.token == undefined) {
          alert("Invalid credentials")
        } else {
          this._router.navigate(["/start"])
        }
      }, err => {
        console.log(err)
        if (err.status == 403) {
          return alert(err.error)
        }
      })
    }
  }
}
