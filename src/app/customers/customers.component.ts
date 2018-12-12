import { Component, OnInit } from '@angular/core';
import { Customer } from '../_class/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  cust: Customer = {
    Code: '1001',
    Name: 'ลุงแม้ว',
    Address: 'Dubai',
    RegisterDate: new Date('2018-05-19')   // yyyy, mm, dd
  };

  constructor() { }

  ngOnInit() {
  }

}
