import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { List } from '../../models/list.model';
import { TaskService } from '../../task.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit,AfterViewInit {

  addEntryForm = new FormGroup({
    name: new FormControl('',[
      Validators.required
    ]),
    type: new FormControl('',[
      Validators.required
    ]),
    amount: new FormControl('',[
      Validators.required
    ]),
    date: new FormControl('',[
      Validators.required
    ]),
  });

  displayedColumns: string[]= ['position', 'name', 'type', 'amount', 'date', 'delete'];
  dataSource = new MatTableDataSource<List>();
  constructor(private taskService: TaskService) { 
  }

  ngOnInit(){
    this.getList()
  }
  getList(){
    this.taskService.getList()
    .subscribe(list => 
      this.dataSource.data = list
      );
  }

  deleteEntry(position: Number){
    this.taskService.deleteEntry(position)
    .subscribe((res:any) =>{
      this.getList()
    });
  }
  addEntry(){
    const add ={
      "accountid":3,
      "name":this.addEntryForm.value.name, 
      "type": this.addEntryForm.value.type, 
      "amount": this.addEntryForm.value.amount, 
      "date": this.addEntryForm.value.date
    };
    console.log(add)
    this.taskService.addEntry(add).subscribe((res:any) => 
    this.getList()
    );
  }

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
