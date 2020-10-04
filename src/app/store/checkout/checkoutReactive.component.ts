import {Component} from '@angular/core';
import {OrderRepository} from '../../model/services/order.repository';
import {Order} from '../../model/order.model';
import {OrderFormGroup} from '../../model/reacitveForm.model';

@Component({
  templateUrl: 'checkoutReactive.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutReactiveComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  date: string = '';
  form: OrderFormGroup = new OrderFormGroup();
  newOrder: Order;

  constructor(public repository: OrderRepository, public order: Order) {
  }

  submitOrder(form: any){
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
