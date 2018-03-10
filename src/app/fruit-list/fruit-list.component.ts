import { Component, OnInit } from '@angular/core';
import { FruitService } from './../fruit.service';
import {NgForm} from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'fruit-list',
  template: `
<div class="container-fluid">
  <div class="row">
    <h2>Fruit List</h2>
    <br><br>
    <h3>{{errorMsg}}</h3>
   <br>
  <ul *ngFor="let fruit of fruits | orderBy: order">
      {{fruit.name}} - <b>Quantity Available: </b>{{fruit.quantityAvailable}}
      <li>{{fruit.description}}</li>
           
    <div class="container-fluid">
    <div class="row book-sb">

        <button class="btn btn-primary" type="submit" (click)="onSave(input.value)">Details</button>&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" type="submit" (click)="onSave(input.value)">Buy</button>&nbsp;&nbsp;&nbsp;
        <input #myInput type="text" value="{{fruit.quantityAvailable}}" style='width:20em'>&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" type="submit" (click)="onClick(myInput.value-1)" style='width:3em'><b>-</b></button>
        <p>Quantity is reduced by  {{fruit.quantityAvailable}} - 1</p>
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

  onClick(value)
{
alert(value);
value= value -1;


}

  constructor(private _fruitService: FruitService) { }

  ngOnInit() {
    this._fruitService.getFruits()
      .subscribe(data => this.fruits = data,
                error => this.errorMsg = error);
  }

 }
