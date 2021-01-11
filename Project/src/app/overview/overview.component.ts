import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', amount: -40, type: 'H'},
  {position: 2, name: 'Helium', amount: 4, type: 'He'},
  {position: 3, name: 'Lithium', amount: -50, type: 'Li'},
  {position: 4, name: 'Beryllium', amount: 9.01, type: 'Be'},
  {position: 5, name: 'Boron', amount: 10.81, type: 'B'},
  {position: 6, name: 'Carbon', amount: -60, type: 'C'},
  {position: 7, name: 'Nitrogen', amount: -20, type: 'N'},
  {position: 8, name: 'Oxygen', amount: 15.99, type: 'O'},
  {position: 9, name: 'Fluorine', amount: 18.99, type: 'F'},
  {position: 10, name: 'Neon', amount: 20.17, type: 'Ne'},
];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'amount', 'type'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatSort,) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
}
