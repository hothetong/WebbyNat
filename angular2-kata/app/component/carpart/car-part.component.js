"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import { CARPARTS } from './mocks';
var racing_data_service_1 = require('../service/racing-data.service');
var CarPartDetailComponent = (function () {
    function CarPartDetailComponent(route, router, racingService) {
        this.route = route;
        this.router = router;
        this.racingService = racingService;
    }
    CarPartDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.racingService.getCarPart(id).subscribe(function (carPart) { return _this.carPart = carPart; });
        });
    };
    CarPartDetailComponent.prototype.upQuantity = function (carPart) {
        if (carPart.quantity < carPart.inStock)
            carPart.quantity++;
    };
    CarPartDetailComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity != 0)
            carPart.quantity--;
    };
    CarPartDetailComponent.prototype.standardizeQuantity = function (carPart) {
        if (carPart.quantity < 0)
            return carPart.quantity = 0;
        if (carPart.quantity > carPart.inStock)
            return carPart.quantity = carPart.inStock;
    };
    CarPartDetailComponent.prototype.handleKey = function (event, carPart) {
        if (event.keyCode == 13)
            return this.standardizeQuantity(carPart);
    };
    CarPartDetailComponent.prototype.isNumber = function (value) {
        if (value === "")
            return true;
        value = Number.parseInt(value);
        return Number.isInteger(value);
    };
    CarPartDetailComponent.prototype.gotoCarPartList = function () {
        this.router.navigate(['/carparts']);
    };
    CarPartDetailComponent = __decorate([
        core_1.Component({
            selector: 'car-part',
            templateUrl: 'app/component/carpart/car-part.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, racing_data_service_1.RacingDataService])
    ], CarPartDetailComponent);
    return CarPartDetailComponent;
}());
exports.CarPartDetailComponent = CarPartDetailComponent;
//# sourceMappingURL=car-part.component.js.map