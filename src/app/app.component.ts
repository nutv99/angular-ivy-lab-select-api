import { Component, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  pokemons: any[] = [];
  title = 'switchmap_pokemon';
  subscription?: Subscription;

  ItemDatas: ItemModel[] = [];

  heroesB: any[] = [];

  constructor(private http: HttpClient, private myapi: MyApiService) {
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
}
