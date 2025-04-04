import { Component } from '@angular/core';
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-sender',
  imports: [],
  standalone:true,
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  
  constructor(private signalService:SignalService){}
  sendData(){
    this.signalService.updateData("Hello from sender component..")
  }
  
}
