import { Component, OnInit } from '@angular/core';

export interface ItemModel {
  ItemID: number;
  ItemName: string;
  Description: string;
  SellPrice: number;
  NumOrder: number;
  ThisMoney: number;
}

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css'],
})
export class Table3Component implements OnInit {

tblModel : ItemModel[] = [] ;  
  constructor() {}

  ngOnInit() {}

  AcceptTableData(e: any) {
    console.log('Emit Accept' + e[0]);
  }
}
