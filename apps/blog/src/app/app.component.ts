import { Component } from '@angular/core';

@Component({
  selector: 'b-root',
  template: `
  <Myworkspace-navigation></Myworkspace-navigation>
  <div class="container" style="margin-top:2rem;">
  <router-outlet></router-outlet>
  </div>
`
})
export class AppComponent {}
