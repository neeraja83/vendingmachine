# Angular5Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve -o` and it opens `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng g s service-name` to generate a new services.
 Used this to create fruit.service
 
## Injected the service and added it in app.module.ts
   providers: [FruitService]

Run `ng g c component-name` to generate a new component.
 Used this to create fruit-detail.component.ts and fruit-list.component.ts.
 
 Declared the following components in declarations in app.module.ts.
     FruitListComponent,
     FruitDetailComponent

## Build

Run `ng build --prod` to build the project in Production which reduces the file size drastically. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Order Alpahbetically:

I downloaded the order pipe to to do that.

Install the following module.

  Run 'npm install ng2-order-pipe --save' and import it in the file using
  
  import { Ng2OrderModule } from 'ng2-order-pipe';

  I also added 'Ng2OrderModule' in imports inside app.module.ts
  
## import Client module

import { HttpClientModule } from '@angular/common/http';
 
## Defined interface Fruits in fruits.ts 

export interface IFruit {
    name: string,
    description: string,
    image: string,
    quantityAvailable: number
}

## Used observables

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
