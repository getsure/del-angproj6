import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
 private dataSignal = signal<string>('initial value from service') 
 getData(){
  return this.dataSignal
 }
 updateData(newData:string){
  this.dataSignal.set(newData)
 }
}
