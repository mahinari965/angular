import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Http: any;
  


  constructor(private httpClint: HttpClient) { }
  getproductlist(){
    return this.httpClint.get('http://localhost:3000/product');
  }
}
