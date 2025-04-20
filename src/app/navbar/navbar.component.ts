import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { DarkModeService } from '../darkmode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    keyword = '';
    productService = inject(ProductService);
    darkModelService = inject(DarkModeService)

    searchProduct(){
      this.productService.searchProduct.set(this.keyword);
      // console.log(this.keyword);
    }

    //toggles the dark and light mode when clicked on the moon/sun bootstrap icons
    toggleDarkMode(){
      this.darkModelService.updateDarkMode();
    }

}
