import { OrderRepository } from './../../model/order.repository';
import {Component, OnInit} from '@angular/core';
import { Order } from 'src/app/model/order.model';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
    // templateUrl: 'checkout-reactive-form.component.html',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  // ***********
  // template-driven form
  // ***********
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository, public order: Order){}

    ngOnInit(): void{}

    submitOrder(form: NgForm){
        this.submitted = true;
        if (form.valid){
            this.repository.saveOrder(this.order).subscribe( order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }

  // ***********
  // reactive form
  // ***********

  // validateForm: FormGroup;
  // orderSent: boolean = false;
  // submitted: boolean = false;
  //
  // constructor(private fb: FormBuilder) {
  // }
  //
  // ngOnInit(): void{
  //   this.validateForm = this.fb.group({
  //
  //   })
  // }
}
