import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFruit } from './fruit';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable()
export class FruitService {

  private _url: string = "/assets/data/fruits.json";
  private messages: Message[] = [];
  constructor(private http:HttpClient) { }

 
  

  addMessage(message: Message)
  {
    this.messages.push(message);
    console.log(this.messages);
   
  }

  getFruits(): Observable<IFruit[]>{
    return this.http.get<IFruit[]>(this._url)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
