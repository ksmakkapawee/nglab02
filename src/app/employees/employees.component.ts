import { Component, OnInit } from '@angular/core';
import { Employee } from '../_class/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  emp: Employee = {
    id: 1,
    name: 'John Bulldog'
  };

  constructor() { }

  ngOnInit() {
  }

}
