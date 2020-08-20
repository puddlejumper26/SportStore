import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {Cart, CartLine} from '../../model/cart.model';
import {By} from '@angular/platform-browser';
import {cartDetailComponent} from './cartDetail.component';
import {Product} from '../../model/product.model';

fdescribe('cartDetailComponent', () => {

  let fixture: ComponentFixture<cartDetailComponent>;
  let component: cartDetailComponent;
  let debugElement: DebugElement;

  let mock

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        cartDetailComponent
      ],
      providers: [Cart],
    }).compileComponents();

    fixture = TestBed.createComponent(cartDetailComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  }));

  it('should exit', () => {
    expect(component).toBeTruthy();
  });

  describe('Remove button', () => {
    xit('should exit when the cart is not empty', () => {
      // component.cart.lines = mockCartLine;
      const ele = debugElement.query(By.css('.remove-button')).nativeElement as HTMLElement;
      expect(ele).toBeTruthy();
    });

    it('should not exit when the cart is empty', () => {
      component.cart.lines.length = 0;
      const ele = debugElement.query(By.css('.remove-button'));
      expect(ele).toBe(null);
    });

    xit('should delete the entire corresponding product when it is clicked', () => {

    });
  });

  describe('Checkout button', () => {
    it('should exit', () => {
      const ele = debugElement.query(By.css('.checkout-button')).nativeElement as HTMLElement;
      expect(ele).toBeTruthy();
    });

    it('should be disabled when the cart is empty', () => {
      component.cart.lines.length = 0;
      fixture.detectChanges();
      expect(debugElement.query(By.css('.checkout-button')).nativeElement.disabled).toBeTruthy();
    });

    xit('should not be disabled when the cart is not empty', () => {
      // component.cart = mockCart;
      console.log(11111111111111, component.cart);
      fixture.detectChanges();
      expect(debugElement.query(By.css('.checkout-button')).nativeElement.disabled).toBeFalse();
    });

    it('should navigate to checkout page when the cart is not empty and clicked', () => {
      const ele = debugElement.query(By.css('.checkout-button')).nativeElement as HTMLElement;
      expect(ele.getAttribute('routerLink')).toBe('/checkout');
      expect(ele.textContent).toBe('Checkout');
    });
  });

  describe('Continue Shopping button', () => {
    it('should exit', () => {
      const ele = debugElement.query(By.css('.continue-shopping')).nativeElement as HTMLElement;
      expect(ele).toBeTruthy();
    });

    it('should navigate to store page when it is clicked', () => {
      const ele = debugElement.query(By.css('.continue-shopping')).nativeElement as HTMLElement;
      expect(ele.getAttribute('routerLink')).toBe('/store');
      expect(ele.textContent).toBe('Continue Shopping');
    });
  });

  // this might be tested inside the cart.model.ts this service
  xit('Total value should be the sum of all subtol values', () => {
      component.cart.lines.length = 0;
      fixture.detectChanges();
      console.log(33333333, debugElement.query(By.css('.total-price')).nativeElement.textContent);
  });

  it('should display "Your cart is empty" when the cart is empty"', () => {
    component.cart.lines.length = 0;
    const ele = debugElement.query(By.css('.cart-is-empty')).nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(ele).toBeTruthy();
    expect(ele.textContent).toBe('Your cart is empty');
  });
});
