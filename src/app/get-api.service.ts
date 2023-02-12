import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }

  url:string='https://dummyjson.com/products'

  getAPI(){
    return this.http.get<any>(this.url);
  }

}
