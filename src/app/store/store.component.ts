import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent {
  public selectedCategory = null;

  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    console.log('this.selectedCategory -> ', this.selectedCategory);
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    console.log('this.repository.getCategories() -> ', this.repository.getCategories());
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    console.log('newCategory -> ', newCategory)
    this.selectedCategory = newCategory;
  }
}

// console.log('this.selectedCategory -> ', this.selectedCategory);
// ->



// console.log('this.repository.getCategories() -> ', this.repository.getCategories());
// ->


// console.log('newCategory -> ', newCategory)
// ->