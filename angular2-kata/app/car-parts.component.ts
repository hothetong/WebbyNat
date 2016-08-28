import { Component } from '@angular/core';

@Component ({
	selector: 'car-parts',
	template: `
	<p>There are {{totalCarParts()}} total parts in stock.</p>
	<ul>
		<li *ngFor="let carPart of carParts">
			<h2>{{carPart.name | uppercase}}</h2>
			<p>{{carPart.description}}</p>
			<p>{{carPart.price | currency:'EUR':true}}</p>
			<p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
			<p *ngIf="carPart.inStock === 0">Out of Stock</p>
		</li>
	</ul>`
})
export class CarPartsComponent {
	carParts = [{
		"id" 			: 1,
		"name" 			: "Super Tires",
		"description"	: "These tires are the very best",
		"inStock"		: 5,
		"price" 		: 4.99
	},
	{
		"id" 			: 2,
		"name" 			: "Reinforced Shocks",
		"description" 	: "Shocks made from skryptonite",
		"inStock"		: 4,
		"price" 		: 9.99
	},
	{
		"id" 			: 3,
		"name" 			: "Padded Seats",
		"description"	: "Super soft seats for a smooth ride",
		"inStock"		: 0,
		"price" 		: 4.99
	}];
	totalCarParts(){
		return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0);
	}
}