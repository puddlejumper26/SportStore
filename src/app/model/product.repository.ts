import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
  }

  getProducts(category: string = null): Product[] {

    // console.log('ProductReposity - products.filter ->', this.products.filter(
    //   (p) => category == null || category === p.category
    // ));

    return this.products.filter(
      (p) => category == null || category === p.category
    );
  }

  getProduct(id: number): Product {
    return this.products.find((p) => p.id == id);
  }

  getCategories(): string[] {

    // console.log('ProductReposity - categories -> ', this.categories);

    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe(p => { 
        this.products.splice(this.products.findIndex(p => p.id === product.id), 1, product) 
      })
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex(p=>p.id === id), 1);
    })
  }

}

  // console.log('ProductReposity - products.filter ->', this.products.filter(
  //   (p) => category == null || category == p.category
  // ));
  // ->
  // (15) [Product, Product, Product, Product, Product, Product, Product, Product, Product, Product, Product, Product, Product, Product, Product]
  // 0: Product {id: 1, name: "Product 1", category: "Category 1", description: "Product 1 (Category 1)", price: 100}
  // 1: Product {id: 2, name: "Product 2", category: "Category 1", description: "Product 2 (Category 1)", price: 100}
  // 2: Product {id: 3, name: "Product 3", category: "Category 1", description: "Product 3 (Category 1)", price: 100}
  // 3: Product {id: 4, name: "Product 4", category: "Category 1", description: "Product 4 (Category 1)", price: 100}
  // 4: Product {id: 5, name: "Product 5", category: "Category 1", description: "Product 5 (Category 1)", price: 100}
  // 5: Product {id: 6, name: "Product 6", category: "Category 2", description: "Product 6 (Category 2)", price: 100}
  // 6: Product {id: 7, name: "Product 7", category: "Category 2", description: "Product 7 (Category 2)", price: 100}
  // 7: Product {id: 8, name: "Product 8", category: "Category 2", description: "Product 8 (Category 2)", price: 100}
  // 8: Product {id: 9, name: "Product 9", category: "Category 2", description: "Product 9 (Category 2)", price: 100}
  // 9: Product {id: 10, name: "Product 10", category: "Category 2", description: "Product 10 (Category 2)", price: 100}
  // 10: Product {id: 11, name: "Product 11", category: "Category 3", description: "Product 11 (Category 3)", price: 100}
  // 11: Product {id: 12, name: "Product 12", category: "Category 3", description: "Product 12 (Category 3)", price: 100}
  // 12: Product {id: 13, name: "Product 13", category: "Category 3", description: "Product 13 (Category 3)", price: 100}
  // 13: Product {id: 14, name: "Product 14", category: "Category 3", description: "Product 14 (Category 3)", price: 100}
  // 14: Product {id: 15, name: "Product 15", category: "Category 3", description: "Product 15 (Category 3)", price: 100}
  // length: 15

  // if click 'Category 1' then
  // ->
  // (5) [Product, Product, Product, Product, Product]
  // 0: Product {id: 1, name: "Product 1", category: "Category 1", description: "Product 1 (Category 1)", price: 100}
  // 1: Product {id: 2, name: "Product 2", category: "Category 1", description: "Product 2 (Category 1)", price: 100}
  // 2: Product {id: 3, name: "Product 3", category: "Category 1", description: "Product 3 (Category 1)", price: 100}
  // 3: Product {id: 4, name: "Product 4", category: "Category 1", description: "Product 4 (Category 1)", price: 100}
  // 4: Product {id: 5, name: "Product 5", category: "Category 1", description: "Product 5 (Category 1)", price: 100}
  // length: 5


  // console.log('ProductReposity - categories -> ', this.categories);
  // ->
  // (3) ["Category 1", "Category 2", "Category 3"]
  // 0: "Category 1"
  // 1: "Category 2"
  // 2: "Category 3"
  // length: 3


  // ********************************* */
  // 解释这里 的 map 和 filter 的作用
  // ********************************* */

  // let arr = [
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     category: "Category 1",
  //     description: "Product 3 (Category 1)",
  //     price: 100
  //   },
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     category: "Category 1",
  //     description: "Product 1 (Category 1)",
  //     price: 100
  //   },
  //   {
  //     id: 4,
  //     name: "Product 4",
  //     category: "Category 4",
  //     description: "Product 4 (Category 4)",
  //     price: 100
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     category: "Category 2",
  //     description: "Product 2 (Category 2)",
  //     price: 100
  //   }
  // ];

  // let data = arr.map((p) => p.category);
  // console.log("data -> ", data);

  // ["Category 1", "Category 1", "Category 4", "Category 2"]
  // 0: "Category 1"
  // 1: "Category 1"
  // 2: "Category 4"
  // 3: "Category 2"

  // console.log(data.indexOf('Category 3')); //2
  // let res = data.filter((c, index, array) => array.indexOf(c) === index);
  // console.log(res);

  // indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
  // 所以这里res 变成 三个元素组成的数组


  // ["Category 1", "Category 4", "Category 2"]
  // 0: "Category 1"
  // 1: "Category 4"
  // 2: "Category 2"

  // console.log(res.sort());
  // ["Category 1", "Category 2", "Category 4"]
  // 0: "Category 1"
  // 1: "Category 2"
  // 2: "Category 4"
