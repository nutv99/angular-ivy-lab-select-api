import { Component, Pipe, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { MyapiService } from './myapi.service';
import { MyApiService } from './myapi.service';
import { Subscription, Subject, switchMap, debounceTime, pipe } from 'rxjs';

export interface ItemModel {
  ItemID: number;
  ItemName: string;
  Description: string;
  SellPrice: number;
  NumOrder: number;
  ThisMoney: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('mTest') myNameElem: ElementRef<any>; 

  title = 'appBootstrap';
   
  closeResult: string = '';

  pokemons: any[] = [];
  
  subscription?: Subscription;
  showListText: boolean = false;

  ItemDatas: ItemModel[] = [];

  heroesB: any[] = [];

  name = 'Angular 5';
  show: boolean = false;
  public deploymentName: any;
  

  constructor(private http: HttpClient, private myapi: MyApiService,private modalService: NgbModal) {
    this.onSearchPokemons
      .pipe(
        debounceTime(200),

        switchMap((searchText) => {
          return this.myapi.getPokemonByName(searchText);
          console.log('aaa' + searchText);
        })
      )
      .subscribe((value) => {
        console.log('Value :: ', value);
        this.pokemons = value;
      });
  }

  showModal(){
    this.show = !this.show;
  }

  GetmTest() {
    // this.myNameElem.nativeElement.value = 'AAAA';
    // alert(this.myNameElem.nativeElement.value);
    alert(this.myNameElem.nativeElement.rows.length);
    this.myNameElem.nativeElement.rows[1].cells[1].innerHTML =
      '<input type="text"  value="" style="border:1px solid gray" />';
  }

  //  constructor(
  //   private PokemonsKalosService : PokemonsKalosService
  //   )
  //    {

  //      this.onSearchPokemons.pipe(
  //        //debounceTime(200),
  //        switchMap(searchText=>{
  //        return this.PokemonsKalosService.getPokemonByName(searchText)
  //      })).subscribe(value=>console.log(value));
  //   }

  onSearchPokemons = new Subject<string>();

  searchPokemons(searchText: string) {
    //  วิธีที่ 1
    // if (this.subscription) {
    //   console.log('UnSubscribe');
    //   this.subscription.unsubscribe();
    // }
    // this.subscription = this.myapi
    //   .getPokemonByName(searchText)
    //   .subscribe((response) => (this.pokemons = response));
    // //alert(searchText);
    // วิธีที่ 2  switchMap
    this.onSearchPokemons.next(searchText);
  }

  AddItem(i: number) {
    //alert(i);
    console.log(this.pokemons[i]);
    this.ItemDatas.push(this.pokemons[i]);
  }

  CalMoney(i: number) {
    let NumOrder = this.ItemDatas[i].NumOrder;
    let SellPrice = this.ItemDatas[i].SellPrice;

    this.ItemDatas[i].ThisMoney = NumOrder * SellPrice;

    //alert(this.ItemDatas[i].NumOrder);
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}


