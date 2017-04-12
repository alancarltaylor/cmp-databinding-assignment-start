import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	clock;
	@Output() evens = new EventEmitter<string>();
	@Output() odds = new EventEmitter<string>();

  constructor() { }



  ngOnInit() {
  }

  startTicker(){
  	let ticker = 1;
  	let _this = this;	
  	this.clock = setInterval(function(){
  		ticker++
  	if (ticker%2 == 0) {
  		_this.evens.emit("evenCalled")
  	} else if (ticker%2 == 1){
  		_this.odds.emit("oddCalled")
  	}
  	}, 500);
  }
  stopTicker(){
  	clearInterval(this.clock)
  }

  increment(){
  	
  }

}
