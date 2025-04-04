import { Component, Signal } from '@angular/core';
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-receiver',
  imports: [],
  standalone:true,
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
  receiveData!:Signal<string>;
  constructor(private signalService:SignalService){
    this.receiveData = this.signalService.getData()
  }
}
