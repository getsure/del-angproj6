import { Component } from '@angular/core';

@Component({
  selector: 'app-child-default',
  imports: [],
  standalone:true,
  templateUrl: './child-default.component.html',
  styleUrl: './child-default.component.css'
})
export class ChildDefaultComponent {
  counter:number = 0
  constructor(){
   setInterval(() => {
     this.counter++
   },1000)
  }
}
