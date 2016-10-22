import { Component } from '@angular/core';

import '../rxjs-operators';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <router-outlet></router-outlet>`,
})
export class AppComponent {
   title = 'Ultra Racing';
}
