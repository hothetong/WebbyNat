import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './component/app.component';

import { CarPartsComponent } from './component/carparts/car-parts.component';
import { CarPartDetailComponent } from './component/carpart/car-part.component';
import { RacingDataService } from './component/service/racing-data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent,  CarPartsComponent, CarPartDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [RacingDataService]
})
export class AppModule { }
