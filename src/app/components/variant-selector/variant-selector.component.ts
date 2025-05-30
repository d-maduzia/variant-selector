import { Component, input, output } from '@angular/core';
import { Variant } from '../product-page/product-page.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-variant-selector',
  imports: [NgOptimizedImage],
  templateUrl: './variant-selector.component.html',
  styleUrl: './variant-selector.component.scss',
})
export class VariantSelectorComponent {
  readonly variants = input.required<Variant[]>();
  readonly activeVariant = input<Variant>();

  readonly variantSelected = output<Variant>();
}
