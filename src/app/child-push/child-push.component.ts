import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-push',
  imports: [],
  standalone:true,
  templateUrl: './child-push.component.html',
  styleUrl: './child-push.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent {
  counter:number = 0
 constructor(private cdr: ChangeDetectorRef){ 
   setInterval(() => {
     this.counter++
     this.cdr.markForCheck()
   },1000)
 }
}
