import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TA-Assignment';
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to the cart count observable
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }
}
