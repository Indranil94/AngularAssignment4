import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() eventStarted;
  start:number;
  checkStarted: boolean;
  timer: any;

  constructor() { 
    this.start = 1;
    this.checkStarted=false;
    this.timer=undefined;
    this.eventStarted = new EventEmitter<{value:number}>();
  }

  ngOnInit() {
  }

  onStart=()=>{
    console.log(this.eventStarted)
    
    this.checkStarted=true;
    this.timer = setInterval(()=>{
      this.eventStarted.emit({
        value: this.start++
      }); 
    },1000);
  }

  onStop(){
    clearInterval(this.timer);
    
    this.checkStarted=false;
  }

}
