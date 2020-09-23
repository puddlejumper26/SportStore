import {CheckoutComponent} from './store/checkout/checkout.component';
import {cartDetailComponent} from './store/cart/cartDetail.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {StoreFirstGuard} from './storeFirst.guard';
import {CheckoutReactiveComponent} from './store/checkout/checkoutReactive.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'cart',
    component: cartDetailComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'checkoutReactive',
    component: CheckoutReactiveComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [StoreFirstGuard]
  },
  {path: '**', redirectTo: '/store'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard],
})
export class AppRoutingModule {
}
