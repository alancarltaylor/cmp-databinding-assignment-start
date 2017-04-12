import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	evensComponents = [];
	oddsComponents = [];
	onEvens(amount){
		this.evensComponents.push(amount);
		console.log("evensComponents: ", this.evensComponents)
	}
	onOdds(amount){
		this.oddsComponents.push(amount);
		console.log("oddsComponents: ", this.oddsComponents)
	}
}
