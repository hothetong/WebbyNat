import { Component } from '@angular/core';

import { CarPart }   from '../model/car-part';
//import { CARPARTS } from './mocks';
import { RacingDataService } from '../service/racing-data.service';

@Component ({
	selector: 'car-parts',
	templateUrl: 'app/component/carparts/car-parts.component.html',
	styleUrls: ['app/component/carparts/car-parts.component.css']
})
export class CarPartsComponent {
	carParts: 	  CarPart[];
	errorMessage: String;

	constructor(
		private racingDataService : RacingDataService,
	) {}
	
	ngOnInit() { this.getCarParts(); }

	getCarParts() {
		//this.carParts = CARPARTS;
		//let racingDataService = new RacingDataService();
		//this.carParts = this.racingDataService.getCarParts();
		this.racingDataService.getCarParts()
								.subscribe(
									carParts => this.carParts = carParts,
                     				error =>  this.errorMessage = <any>error);
	}

	totalCarParts() {
		if(Array.isArray(this.carParts))
			return this.carParts.reduce((prev, curr) => prev + curr.inStock - curr.quantity, 0);
	}

	upQuantity(carPart) {
		if(carPart.quantity < carPart.inStock)
			carPart.quantity++;
	}

	downQuantity(carPart) {
		if(carPart.quantity != 0)
			carPart.quantity--;
	}

	standardizeQuantity(carPart) {
		if(carPart.quantity < 0)
			return carPart.quantity = 0;
		if(carPart.quantity > carPart.inStock)
			return carPart.quantity = carPart.inStock;
	}

	handleKey(event, carPart) {
		if(event.keyCode == 13)
			return this.standardizeQuantity(carPart);
	}
}