import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CarPart }   from '../model/car-part';
//import { CARPARTS } from './mocks';
import { RacingDataService } from '../service/racing-data.service';

@Component ({
    selector: 'car-part',
    templateUrl: 'app/component/carpart/car-part.component.html'
})

export class CarPartDetailComponent {
    carPart: CarPart
    constructor(
		private route: ActivatedRoute,
		private router: Router,
		private racingService: RacingDataService
	){}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.racingService.getCarPart(id).subscribe(carPart => this.carPart = carPart);
		});
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
	
	isNumber(value) {
		if (value ==="")
			return true;
		value = Number.parseInt(value);
		return Number.isInteger(value);
		 }

	gotoCarPartList() {
		this.router.navigate(['/carparts']);
	}
}