import { Component } from '@angular/core';
import { Cart } from 'src/app/model/services/cart.model';

@Component({
  templateUrl: 'cartDetail.component.html',
})
export class cartDetailComponent {
  constructor(public cart: Cart) {}
}
