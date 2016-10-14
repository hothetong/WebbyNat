import { Component } from '@angular/core';
import { CarPart } from './car-part';
//import { CARPARTS } from './mocks';
import { RacingDataService } from './racing-data.service';

@Component ({
	selector: 'car-parts',
	templateUrl: 'app/car-parts.component.html',
	styleUrls: ['app/car-parts.component.css']
})
export class CarPartsComponent {
	carParts: CarPart[];
	constructor(private racingDataService : RacingDataService){}
	ngOnInit(){
		//this.carParts = CARPARTS;
		//let racingDataService = new RacingDataService();
		//this.carParts = this.racingDataService.getCarParts();
		this.racingDataService.getCarParts()
			.subscribe(carParts => this.carParts = carParts);
	}
	totalCarParts(){
		if(Array.isArray(this.carParts))
			return this.carParts.reduce((prev, curr) => prev + curr.inStock - curr.quantity, 0);
	}
	upQuantity(carPart){
		if(carPart.quantity < carPart.inStock)
			carPart.quantity++;
	}
	downQuantity(carPart){
		if(carPart.quantity != 0)
			carPart.quantity--;
	}
	standardizeQuantity(carPart){
		if(carPart.quantity < 0)
			return carPart.quantity = 0;
		if(carPart.quantity > carPart.inStock)
			return carPart.quantity = carPart.inStock;
	}
	handleKey(event, carPart){
		if(event.keyCode == 13)
			return this.standardizeQuantity(carPart);
	}
}