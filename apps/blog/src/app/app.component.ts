import { Component } from '@angular/core';

@Component({
  selector: 'b-root',
  template: `
  <Myworkspace-navigation></Myworkspace-navigation>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
`,

  styles: []
})
export class AppComponent {
  title = 'blog';
}
