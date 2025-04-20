import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  url = 'https://fakestoreapi.com/products';

  private http = inject(HttpClient);

  products = signal<Product[]>([]);

  searchProduct = signal<string>('');

  //returns the Products[] as an Observable 
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  //filters the products by matching the search keyword across all string attributes of each product.
  filterProductsByKeyword(): Product[] {
    const productList = this.products();
    const lowerKeyword = this.searchProduct().toLowerCase().trim();

    return productList.filter((product) =>
      Object.entries(product).some(
        ([_, value]) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(lowerKeyword)
      )
    );
  }
}
