import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

interface Product{
  id : number
  productName:string
  Price : number,
  Description: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any[] = [];
  carts: any[] = [];
  cartCount: number = 0;

  constructor(private cartService: CartService,  private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (products:Product[]) => {
        this.products = products;
        
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  addToCart(product:Product): void {

    this.cartService.addToCart(product).subscribe(
      (response) => {
        console.log('Item added to cart:', response);
       this.cartService.incrementCartCount();
       this.carts.push(product);
      },
      (error) => {
        console.error('Error adding item to cart:', error);
      }
    );
  }
}
