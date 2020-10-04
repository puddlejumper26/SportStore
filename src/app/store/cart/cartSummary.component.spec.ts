import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { cartSummaryComponent } from './cartSummary.component';
import {DebugElement} from '@angular/core';
import { Cart } from '../../model/services/cart.model';
import {By} from '@angular/platform-browser';

describe('cartSummaryComponent', () => {

  let fixture: ComponentFixture<cartSummaryComponent>;
  let component: cartSummaryComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        cartSummaryComponent
      ],
      providers: [Cart],
    }).compileComponents();

    fixture = TestBed.createComponent(cartSummaryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  }));

  describe('Click Cart Button', () => {
    it('should exit', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled when cart is empty', () => {
      component.cart.itemCount = 0;
      fixture.detectChanges();
      expect(debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();
    });

    it('should not be disabled when cart is not empty', () => {
      component.cart.itemCount = 2;
      fixture.detectChanges();
      expect(debugElement.nativeElement.querySelector('button').disabled).toBeFalse();
    });

    it('should have "/cart" as value inside routerLink attribution', () => {
      const button = debugElement.query(By.css('button')).nativeElement as HTMLElement;
      expect(button.getAttribute('routerLink')).toBe('/cart');
    });
  });

  it('should display "(empty)" when cart is empty', () => {
      component.cart.itemCount = 0;
      fixture.detectChanges();
      expect(debugElement.query(By.css('span')).nativeElement.textContent).toBe('(empty)');
  });

  it('should display "1 item(s) $100.00" when cart is one item', () => {
      component.cart.itemCount = 1;
      fixture.detectChanges();
      expect(debugElement.query(By.css('span')).nativeElement.textContent).toContain(' 1 item(s) $00.00 ');
  });
});
