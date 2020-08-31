import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { cartDetailComponent } from './cart/cartDetail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from '../model/counter.directive';
import { cartSummaryComponent } from './cart/cartSummary.component';
import {CheckoutReactiveComponent} from './checkout/checkoutReactive.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, ReactiveFormsModule],
  declarations: [StoreComponent, CounterDirective, cartSummaryComponent, cartDetailComponent, CheckoutReactiveComponent, CheckoutComponent],
  exports: [StoreComponent, cartDetailComponent, CheckoutComponent, CheckoutReactiveComponent],
})
export class StoreModule {}
