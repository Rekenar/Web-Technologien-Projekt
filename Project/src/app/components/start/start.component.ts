import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
  display = {
    home: false,
    overview:false
  }

  constructor(private router:Router){}
  
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
}
