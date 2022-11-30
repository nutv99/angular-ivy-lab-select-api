import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css'],
})
export class Table3Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  AcceptTableData(e: any) {
    console.log('Emit Accept' + e[0]);
  }
}
