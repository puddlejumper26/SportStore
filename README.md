<h1 align="center">Sport Store Project</h1>

# Desc 

This project is trying to realize most of the functions of Angular : )

# Demo (In Progress)

- [LINK](https://puddlejumper26.github.io/SportStore/)
- But I am working on it everyday, almost!

# Tech Stack & IDE
- Angular 9, TypeScript, Bootstrap(4.1.1), HTML5, Json-Server  
- VS Code

# Skills / Functions implemented

## Form Validation

## Service

#### [static.datasource.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/model/static.datasource.ts)
- provide the mock static datasource for the app, it is used at the beginning for buidling the app, afterwards it is replaced by the RESTFUL Web service
#### [product.repository.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/model/product.repository.ts)
- provide all the potential functions and methods of product
#### [cart.model.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/model/cart.model.ts)
- provide all the potential functions and methods of Cart

## Directive

#### [counter.directive.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/store/counter.directive.ts)
- this is an `iterative structure directive`, like *ngFor, but built by author
- to display paginations in a more professional way, rather than hard coding

## Route Guard 

 [What is Route Guard](https://github.com/puddlejumper26/blogs/issues/153)
 - 4 attributes to allow route to be activated or leave `canActivate`, `canActivateChild`,`canDeactivate`,`canLoad`

#### [storeFirst.guard.ts](https://github.com/puddlejumper26/SportStore/blob/master/src/app/storeFirst.guard.ts)
- `canActivate`. When customer on pages other than '/store', e.g. '/cart', and refresh the page, then will automatically redirect to '/store'.

## Authentication

## Restful web


