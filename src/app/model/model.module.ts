import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDatasource } from './rest.datasource';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, OrderRepository, Order, StaticDataSource, RestDatasource, AuthService,
    { provide: StaticDataSource, useClass: RestDatasource }
  ]
})
export class ModelModule { }
