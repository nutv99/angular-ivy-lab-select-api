import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  thisURL: string = '';

  constructor(private http: HttpClient) {}

  public getPokemonByName(sname: string) {
    this.thisURL =
      'https://lovetoshopmall.com/dataservice/getItem.php?item=' + sname;
    return this.http.get<any>(this.thisURL);
  }

  public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any>(url);
  }
}
