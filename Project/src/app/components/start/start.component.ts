import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
  display = {
    home: true,
    overview:false
  }

  constructor(private taskservice: TaskService, private router:Router){}
  
  ngOnInit(): void {
  }
  homeScreen(){
    this.display = {
      home: true,
      overview:false
    }
  }
  overviewScreen(){
    this.display = {
      home: false,
      overview:true
    }
  }
  loginScreen(){
    localStorage.clear();
    this.router.navigate(["/login"])
  }
}
