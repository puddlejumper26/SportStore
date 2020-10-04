import { NgModule } from '@angular/core';
import { ProductRepository } from './services/product.repository';
import { StaticDataSource } from './services/static.datasource';
import { Cart } from './services/cart.model';
import { OrderRepository } from './services/order.repository';
import { Order } from './order.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './services/rest.datasource';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, OrderRepository, Order, StaticDataSource, RestDataSource, AuthService,
    { provide: StaticDataSource, useClass: RestDataSource }
  ]
})
export class ModelModule { }
