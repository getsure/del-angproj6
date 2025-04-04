import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SignalComponent } from './signal/signal.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

@Component({
  selector: 'app-root',
  imports: [SenderComponent, ReceiverComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angproj6';
}
