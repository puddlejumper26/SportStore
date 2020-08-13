import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
    selector: 'app-cart-summary',
    templateUrl: 'cartSummary.component.html'
})
// tslint:disable-next-line:class-name
export class cartSummaryComponent{
    constructor(public cart: Cart){}
}
