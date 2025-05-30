import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { VariantSelectorComponent } from '../variant-selector/variant-selector.component';

export type Variant = {
  id: string;
  name: string;
  imageSrc: string;
};

@Component({
  selector: 'app-product-page',
  imports: [NgOptimizedImage, VariantSelectorComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {
  readonly variants: Variant[] = [
    {
      id: '1',
      name: 'White',
      imageSrc: 'assets/variants/t-shirt-white.svg',
    },
    {
      id: '2',
      name: 'Yellow',
      imageSrc: 'assets/variants/t-shirt-yellow.svg',
    },
    {
      id: '3',
      name: 'Red',
      imageSrc: 'assets/variants/t-shirt-red.svg',
    },
    {
      id: '4',
      name: 'Black',
      imageSrc: 'assets/variants/t-shirt-black.svg',
    },
  ] as const;

  readonly quantity = signal(1);
  readonly activeVariant = signal(this.variants[0]);

  updateQuantity(diff: number) {
    this.quantity.update((prev) => (prev + diff > 1 ? prev + diff : 1));
  }

  onVariantSelected(variant: Variant) {
    this.activeVariant.set(variant);
  }
}
