import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface Product{
  id : number
  productName:string
  Price : number,
  Description: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:4000/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
