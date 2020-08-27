<h1 align="center">Sport Store Project</h1>

# 1.0 Desc 

This project is trying to realize most of the functions of Angular : )  Check point 4.0 [Click here](https://github.com/puddlejumper26/SportStore/blob/master/README.md#40-skills--functions-implemented)

# 2.0 Demo (In Progress)

- [LINK](https://puddlejumper26.github.io/SportStore/)
- But I am working on it everyday, almost!

# 3.0 Tech Stack & IDE
- Angular 9, TypeScript, Git, Bootstrap(4.1.1), HTML5
- JSON-Server (could not run remote, only local for CRUD)
- my JSON-Server (online fake REST Serve)(https://my-json-server.typicode.com/)
- VS Code $ IntelliJ

# 4.0 Skills / Functions implemented

## 4.1 Form Validation

#### 4.1.1 Template Form Validation
- directly inside the template, here is [checkout.component.html](https://github.com/puddlejumper26/SportStore/blob/master/src/app/store/checkout/checkout.component.html)
- only the validation information, managed by the entire form, through `getFormValidationMessages()` and `getValidationMessages()` inside [checkout.component.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/store/checkout/checkout.component.ts)

#### 4.1.2 Reactive Form Validation
- put all the limits inside a ts file

## 4.2 Service

#### [static.datasource.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/model/static.datasource.ts)
- provide the mock static datasource for the app, it is used at the beginning for buidling the app, afterwards it is replaced by the RESTFUL Web service
#### [product.repository.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/model/product.repository.ts)
- provide all the potential functions and methods of product
#### [cart.model.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/model/cart.model.ts)
- provide all the potential functions and methods of Cart

## 4.3 Directive

#### [counter.directive.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/store/counter.directive.ts)
- this is an `iterative structure directive`, like *ngFor, but built by author
- to display paginations in a more professional way, rather than hard coding

## 4.4 Route Guard 

 [What is Route Guard](https://github.com/puddlejumper26/blogs/issues/153)
 - 4 attributes to allow route to be activated or leave `canActivate`, `canActivateChild`,`canDeactivate`,`canLoad`

#### [storeFirst.guard.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/storeFirst.guard.ts)
- `canActivate`. When customer on pages other than '/store', e.g. '/cart', and refresh the page, then will automatically redirect to '/store'.

## 4.5 Authentication

## 4.6 Restful web

#### [rest.datasource.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/model/rest.datasource.ts)
- this is to replace the local StaticDataSource, in order to enable the futher interaction between the data source `data.js` and user interface

## 4.7 Testing

### 4.7.1 Jasmine

#### [cartSummary.component.spec.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/store/cart/cartSummary.component.spec.ts)
- [routerLink] , [disabled]

### 4.7.2 Testing Protractor 
- Angular 开发实战 p108

## 4.8 Http Interceptor
- Angular 开发实战 p65
