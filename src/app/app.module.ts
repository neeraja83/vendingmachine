import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitService } from './fruit.service';


@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    FruitDetailComponent,
    ],
  imports: [
    BrowserModule,
    Ng2OrderModule,
    HttpClientModule,
    ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

