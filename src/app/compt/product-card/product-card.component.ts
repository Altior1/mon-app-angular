import { Component } from '@angular/core';
import { DigitalProduct, PhysicalProduct } from '../../classe/enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  public product1: DigitalProduct;
  public product2: PhysicalProduct;

  constructor() {
    this.product1 = new DigitalProduct(500, 1, "Digital Product 1", new Date());
    this.product2 = new PhysicalProduct(1.5, 2, "Physical Product 1", new Date(4));
  }
}
