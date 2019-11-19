import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Array<number>;
  constructor(){
    this.data=[];
  }

  onEventStarted(arrVal: {value: number}){
    this.data.push(arrVal.value);
  }

}
