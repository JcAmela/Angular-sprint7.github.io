import { Component } from '@angular/core';
import { ListProduct } from '../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Sprint 7 It Academy';

  listProduct: ListProduct = {
    firstProduct: false,
    secondProduct: false,
    thirdProduct: false,
    totalPrice: 0,
  }

  lastWebCost: number = 0; 

  Web(): void {
    if (this.listProduct.firstProduct) {
      this.listProduct.totalPrice += 500; 
    } else {
      this.listProduct.totalPrice -= this.lastWebCost + 500; 
      this.lastWebCost = 0; 
    }
  }

  seo(): void {
    if (this.listProduct.secondProduct) {
      this.listProduct.totalPrice += 300;
    } else {
      this.listProduct.totalPrice -= 300;
    }
  }

  publi(): void {
    if (this.listProduct.thirdProduct) {
      this.listProduct.totalPrice += 200;
    } else {
      this.listProduct.totalPrice -= 200;
    }
  }
  
  updateTotalPrice(cost: number) {
    this.listProduct.totalPrice -= this.lastWebCost; 
    this.listProduct.totalPrice += cost;
    this.lastWebCost = cost;
  }
}
