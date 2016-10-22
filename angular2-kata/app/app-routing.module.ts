import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarPartsComponent } from './component/carparts/car-parts.component';
import { CarPartDetailComponent } from './component/carpart/car-part.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'carpart/:id',
        component: CarPartDetailComponent,
     },
      {
        path: 'carparts',
        component: CarPartsComponent,
        data: {
          title: 'Carpart List'
        }
      },
      { path: '', component: CarPartsComponent },
      // { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
