import {Cart} from './services/cart.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Order {
  public id: number;
  public firstName: string;
  public lastName: string;
  public title: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: number;
  public email: string;
  public country: string;
  public shipped: boolean = false;
  public acceptTerms: boolean = false;
  public password: string;
  public confirmPassword: string;

  constructor(public cart: Cart) {
  }

  clear() {
    this.id = null;
    this.firstName = this.lastName = this.address = this.city = this.email = null;
    this.state = this.zip = this.country = this.password = this.confirmPassword = null;
    this.shipped = false;
    this.acceptTerms = false;
    this.cart.clear();
  }
}

