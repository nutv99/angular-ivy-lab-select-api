import { Component, OnInit } from '@angular/core';

export interface ItemModel999 {
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
  tblModel: ItemModel999[] = [
    {
      ItemID: 1,
      ItemName: 'Test',
      Description: 'Desccccc',
      SellPrice: 8752,
      NumOrder: 1,
      ThisMoney: 1,
    },
    {
      ItemID: 2,
      ItemName: 'Test2',
      Description: '222Desccccc',
      SellPrice: 228752,
      NumOrder: 21,
      ThisMoney: 21,
    },
  ];
  constructor() {}

  ngOnInit() {}

  AcceptTableData(e: any) {
    console.log('Emit Accept' + e[0]);
    this.tblModel.push(e);
  }

  CalMoney(i: number) {
    let NumOrder = this.tblModel[i].NumOrder;
    let SellPrice = this.tblModel[i].SellPrice;

    this.tblModel[i].ThisMoney = NumOrder * SellPrice;

    //alert(this.ItemDatas[i].NumOrder);
  }
}
