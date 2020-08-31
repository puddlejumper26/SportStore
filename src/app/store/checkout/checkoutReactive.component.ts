import {Component} from '@angular/core';
import {OrderRepository} from '../../model/order.repository';
import {Order} from '../../model/order.model';
import {NgForm} from '@angular/forms';
import {InputFormGroup} from '../../model/reacitveForm.model';

@Component({
  templateUrl: 'checkoutReactive.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutReactiveComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  date: string = '';
  form: InputFormGroup = new InputFormGroup()
  newOrder: Order;

  constructor(public repository: OrderRepository, public order: Order) {
  }

  submitOrder(form: NgForm){
    this.form.inputControls.forEach(c => this.newOrder[c.modelProperty] = c.value);
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
