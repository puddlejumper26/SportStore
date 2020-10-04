import {OrderRepository} from '../../model/services/order.repository';
import {Component, OnInit} from '@angular/core';
import {Order} from 'src/app/model/order.model';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // ***********
  // template-driven form
  // ***********
  orderSent: boolean = false;
  submitted: boolean = false;
  date: string = '';

  constructor(public repository: OrderRepository, public order: Order) {
    this.date = new Date().toISOString().slice(0, 16);
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
            messages.push(`${thing} is required`);
            break;
          case 'minlength':
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength}`);
            break;
          case 'pattern' || '':
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
