//import { CARPARTS } from './mocks';
import { CarPart } from '../model/car-part';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../../rxjs-operators';

@Injectable()
export class RacingDataService{
    private carpartUrl = 'app/component/model/car-parts.json';

    constructor(private http: Http){}

    getCarParts(): Observable<CarPart[]>{
        return this.http.get(this.carpartUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getCarPart(id: number): Observable<CarPart> {
      return this.getCarParts().map(carParts => carParts.find(carPart => carPart.id === id));
      //return this.http.get(this.carpartUrl).toPromise().then(res => res.json().data as CarPart[]).then(carParts => carParts.find(carPart => carPart.id === id));
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}