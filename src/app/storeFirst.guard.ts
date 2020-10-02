import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StoreComponent } from './store/store.component';

@Injectable()
export class StoreFirstGuard{
    private firstNavigation = true;
    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.firstNavigation){
            this.firstNavigation = false;
            if(route.component !== StoreComponent){
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    }
}

// then it needs to be applied into the routing files
// const routes: Routes = [
//   {
//     path: 'store',
//     component: StoreComponent,
//     canActivate: [StoreFirstGuard],    <================
//   },
//   {
//     path: 'cart',
//     component: cartDetailComponent,
//     canActivate: [StoreFirstGuard],       <================
//   },
//   {
//     path: 'checkout',
//     component: CheckoutComponent,
//     canActivate: [StoreFirstGuard],           <================
//   },
//   {
//     path: 'checkoutReactive',
//     component: CheckoutReactiveComponent,
//     canActivate:[StoreFirstGuard],          <================
//   },
//   { path: '**', redirectTo: '/store' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: [StoreFirstGuard],                     <================
// })
// export class AppRoutingModule {}
