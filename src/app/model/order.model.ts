import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order{
    public id: number;
    public firstName: string;
    public lastName: string;
    public gender: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shipped: boolean = false;

    constructor(public cart: Cart){}

    clear(){
        this.id = null;
        this.firstName = this.lastName = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}

