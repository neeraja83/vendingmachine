import { Component, OnInit } from '@angular/core';
import { FruitService } from './../fruit.service';

@Component({
  selector: 'fruit-list',
  template: `
<div class="container">
  <div class="row">
    <h2>Fruit List</h2>
    <h3>{{errorMsg}}</h3>
   
  <ul *ngFor="let fruit of fruits | orderBy: order">
      <li>{{fruit.name}} - <b>Quantity Available: </b>{{fruit.quantityAvailable}}</li>
      <li>{{fruit.description}}</li>
           
  <div class="container">
    <div class="row">

        <button class="btn btn-primary" type="submit" (click)="onSave(input.value)">Details</button>
        <button class="btn btn-primary" type="submit" (click)="onSave(input.value)">Buy</button>
     <div class="col-lg-4">
      <div class="input-group">
        <span class="input-group-btn">
         <button type="button" class="quantity-left-minus btn btn-default btn-number"  data-type="minus" data-field="">
         <span class="glyphicon glyphicon-minus"></span>
         </button>
        </span>
        <input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100">
        <span class="input-group-btn">
         <button type="button" class="quantity-right-plus btn btn-default btn-number" data-type="plus" data-field="">
         <span class="glyphicon glyphicon-plus"></span>
         </button>
        </span>
     </div>
    </div>
   </div>
  </div>
  </ul>
 </div>
</div>
  `,
  styles: []
})
export class FruitListComponent implements OnInit {

  public fruits = [];
  order: string = 'name';
  public errorMsg;
  constructor(private _fruitService: FruitService) { }

  ngOnInit() {
    this._fruitService.getFruits()
      .subscribe(data => this.fruits = data,
                error => this.errorMsg = error);
  }



}
