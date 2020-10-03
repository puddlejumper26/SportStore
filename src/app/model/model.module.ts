import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, OrderRepository, Order, StaticDataSource, RestDataSource, AuthService,
    { provide: StaticDataSource, useClass: RestDataSource }
  ]
})
export class ModelModule { }
