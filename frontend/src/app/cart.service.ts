import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:4000/api';

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient) { }

  addToCart(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addProductToCart`, product);
  }

  incrementCartCount(): void {
    const currentCount = this.cartCountSubject.value;
    this.cartCountSubject.next(currentCount + 1);
  }
}
