import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { OrderTableComponent } from './orderTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { ProductTableComponent } from './productTable.component';

const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
      children:[
        { path: "products/:mode/:id", component: ProductEditorComponent },
        { path: "products/:mode", component: ProductEditorComponent },
        { path: "products", component: ProductTableComponent },
        { path: "orders", component: OrderTableComponent },
        { path: "**", redirectTo: "products" }
      ] },
    { path: '**', redirectTo: 'auth' }
  ];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule {
}
