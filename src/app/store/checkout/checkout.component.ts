import {OrderRepository} from './../../model/order.repository';
import {Component, OnInit} from '@angular/core';
import {Order} from 'src/app/model/order.model';
import {NgForm} from '@angular/forms';

@Component({
  // templateUrl: 'checkout-reactive-form.component.html',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // ***********
  // template-driven form
  // ***********
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderRepository, public order: Order) {
  }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${thing}`);
            break;
          case 'minlength':
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength}`);
            break;
          case 'pattern':
            messages.push(`The ${thing} contains illegal char`);
            break;
        }
      }
    }
    return messages;
  }

  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
    });
    return messages;
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
