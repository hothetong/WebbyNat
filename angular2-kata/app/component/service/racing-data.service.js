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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('../../rxjs-operators');
var RacingDataService = (function () {
    function RacingDataService(http) {
        this.http = http;
        this.carpartUrl = 'app/component/model/car-parts.json';
    }
    RacingDataService.prototype.getCarParts = function () {
        return this.http.get(this.carpartUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RacingDataService.prototype.getCarPart = function (id) {
        return this.getCarParts().map(function (carParts) { return carParts.find(function (carPart) { return carPart.id === id; }); });
        //return this.http.get(this.carpartUrl).toPromise().then(res => res.json().data as CarPart[]).then(carParts => carParts.find(carPart => carPart.id === id));
    };
    RacingDataService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    RacingDataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    RacingDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RacingDataService);
    return RacingDataService;
}());
exports.RacingDataService = RacingDataService;
//# sourceMappingURL=racing-data.service.js.map