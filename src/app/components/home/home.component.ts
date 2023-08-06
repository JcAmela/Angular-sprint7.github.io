
import { Component } from '@angular/core';
import { ListProduct } from '../interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',               
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']    
})
export class HomeComponent {
  title: string = 'Sprint 7 It Academy';  

  listProduct: ListProduct = {   
    firstProduct: false,
    secondProduct: false,
    thirdProduct: false,
    totalPrice: 0,
  }

  lastWebCost: number = 0;  // Variable que mantiene el último costo calculado para el producto "Web"

  // Método para calcular el precio del producto "Web"
  Web(): void {
    if (this.listProduct.firstProduct) {
      this.listProduct.totalPrice += 500;
    } else {
      this.listProduct.totalPrice -= this.lastWebCost + 500;
      this.lastWebCost = 0;
    }
  }

  // Método para calcular el precio del producto "SEO"
  seo(): void {
    if (this.listProduct.secondProduct) {
      this.listProduct.totalPrice += 300;
    } else {
      this.listProduct.totalPrice -= 300;
    }
  }

  // Método para calcular el precio del producto "Publicidad"
  publi(): void {
    if (this.listProduct.thirdProduct) {
      this.listProduct.totalPrice += 200;
    } else {
      this.listProduct.totalPrice -= 200;
    }
  }

  // Método para actualizar el precio total basado en un nuevo costo proporcionado
  updateTotalPrice(cost: number): void {
    this.listProduct.totalPrice -= this.lastWebCost;  // Se resta el último costo de "Web"
    this.listProduct.totalPrice += cost;              // Se suma el nuevo costo
    this.lastWebCost = cost;                          // Se actualiza el último costo de "Web"
  }

  
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
