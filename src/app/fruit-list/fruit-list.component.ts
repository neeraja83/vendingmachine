import { Component, OnInit,Input } from '@angular/core';
import { FruitService } from './../fruit.service';
import {NgForm} from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'fruit-list',
  templateUrl: './fruit-list.component.html',
})
export class FruitListComponent implements OnInit {

  public fruits = [];
  
  order: string = 'name';
  public errorMsg;

onClick1(value1,value2)
{
 alert(value1);
 alert(value2);
 
 var y= value2;
 document.getElementById("demo1").innerHTML = "<br><b>Details Page<br><br><br></b> "+x+"<br><br>"+y;
 var x =(<HTMLImageElement>document.querySelector("myInput1")).src;
 
document.getElementById("demo1").innerHTML = x;
 }

onClick(value)
{
 var x = value;
 document.getElementById("demo").innerHTML = "The Quantity is reduced to "+x;
}
  constructor(private _fruitService: FruitService) { }

  ngOnInit() {
    this._fruitService.getFruits()
      .subscribe(data => this.fruits = data,
                error => this.errorMsg = error);
  }

 }
