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

  //根据this.selectedCategory的值（如Category 1）来生成新的数组，如果点击Category 1的按钮，则生成下列数组
  // [Product, Product, Product, Product, Product]
  // 0: Product {id: 1, name: "Product 1", category: "Category 1", description: "Product 1 (Category 1)", price: 100}
  // 1: Product {id: 2, name: "Product 2", category: "Category 1", description: "Product 2 (Category 1)", price: 100}
  // 2: Product {id: 3, name: "Product 3", category: "Category 1", description: "Product 3 (Category 1)", price: 100}
  // 3: Product {id: 4, name: "Product 4", category: "Category 1", description: "Product 4 (Category 1)", price: 100}
  // 4: Product {id: 5, name: "Product 5", category: "Category 1", description: "Product 5 (Category 1)", price: 100}
  // length: 5
  get products(): Product[] {
    console.log('this.selectedCategory -> ', this.selectedCategory);
    console.log('this.repository.getProducts(this.selectedCategory) -> ', this.repository.getProducts(this.selectedCategory));
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    // console.log('this.repository.getCategories() -> ', this.repository.getCategories());
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    // console.log('newCategory -> ', newCategory)
    this.selectedCategory = newCategory;
  }
}

// console.log('this.selectedCategory -> ', this.selectedCategory);
// ->



// console.log('this.repository.getCategories() -> ', this.repository.getCategories());
// ->
// ["Category 1", "Category 2", "Category 3"]
// 0: "Category 1"
// 1: "Category 2"
// 2: "Category 3"
// length: 3


// console.log('newCategory -> ', newCategory)
// -> newCategory 和 selectedCategory 一直都是一样的，因为这一步将其赋值给了selectedCategory
// 所以这里如果点击 Category 1 的按钮，则两者都显示 Category 1