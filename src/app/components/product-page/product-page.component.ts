import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  imports: [NgOptimizedImage],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  readonly variants = [
    {
      id: '1',
      name: 'White T-Shirt',
      imageSrc: 'assets/variants/t-shirt-white.svg',
    },
    {
      id: '2',
      name: 'Yellow T-Shirt',
      imageSrc: 'assets/variants/t-shirt-yellow.svg',
    },
    {
      id: '3',
      name: 'Orange T-Shirt',
      imageSrc: 'assets/variants/t-shirt-orange.svg',
    },
    {
      id: '4',
      name: 'Red T-Shirt',
      imageSrc: 'assets/variants/t-shirt-red.svg',
    },
  ];
}
