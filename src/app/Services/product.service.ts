import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:3000/Products";

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.url);
  }
  getOneOrder(id?:number): Observable<Product> {
    return this.http.get<Product>(this.url+"/"+id);
  }
  
}
