import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {

  productService = inject(ProductService);

  //computed signal products will be updated dynamically everytime the search keyword changes.
  products = computed(() => {
    return this.productService.filterProductsByKeyword();
  });

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((data) => this.productService.products.set(data));
  }
}
