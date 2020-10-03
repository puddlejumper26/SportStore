import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent{
    product: Product = new Product();
    editing: boolean = false;
    
    // constructor(private respository: ProductRepository,
    //             private router: Router,
    //             activateRoute: ActivatedRoute){
    //                 this.editing = activateRoute.snapshot.params['mode'] === 'edit';
    //                 if(this.editing){
    //                     Object.assign(this.product, respository.getProduct(activateRoute.snapshot.params['id']))
    //                 }
    //             }
    
    // save(form: NgForm){
    //     this.respository.saveProduct(this.product);
    //     this.router.navigateByUrl("/admin/main/products")
    // }

    constructor(private repository: ProductRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product,
                repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }

    save(form: NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }

}