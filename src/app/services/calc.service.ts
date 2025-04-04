import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  public addOperation(a:number, b:number):number{
    return a+b
  }
  public subOperation(a:number, b:number):number{
    return a-b
  }

}
