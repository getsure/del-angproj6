import { Component } from '@angular/core';
import { ChildPushComponent } from '../child-push/child-push.component';
import { ChildDefaultComponent } from '../child-default/child-default.component';

@Component({
  selector: 'app-parent',
  imports: [ChildPushComponent, ChildDefaultComponent],
  standalone:true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  counter:number = 0
  constructor(){
   setInterval(() => {
     this.counter++
   },1000)
  }
}
