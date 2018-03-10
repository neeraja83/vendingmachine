
import { Component, OnInit } from '@angular/core';
import { FruitService } from './../fruit.service';

@Component({
  selector: 'fruit-detail',
  template: `
    <h2>Fruit Detail</h2>
    <h3>{{errorMsg}}</h3>    
    <ul *ngFor="let fruit of fruits">
      <li>{{fruit.name}} - {{fruit.description}} </li>
    </ul>
  `,
  styles: []
})

export class FruitDetailComponent implements OnInit {

  public fruits = [];
  public errorMsg;
  
  constructor(private _fruitService:FruitService) { }

  ngOnInit() {
    this._fruitService.getFruits()
      .subscribe(data => this.fruits = data,
                 error => this.errorMsg = error);
        
  }

}
