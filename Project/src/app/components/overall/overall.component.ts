import { Component, OnInit} from '@angular/core';
import { TaskService } from 'src/app/core/task.service';


@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent implements OnInit{
  sumObject;
  constructor(private taskservice:TaskService){}

  ngOnInit(){
    this.getSum()
  }
  getSum(){
    this.taskservice.getOverall().subscribe((sum)=>
    this.sumObject = sum[0]
    );
    this.resolveAfter0Seconds()
  }
  resolveAfter0Seconds() {
    return new Promise(()=> {
      setTimeout(() => {
        this.sumObject = Object.values(this.sumObject);
      }, 0);
    });
  }
  getTotal(){
    return this.sumObject !== null && this.sumObject !== undefined;
  }
}