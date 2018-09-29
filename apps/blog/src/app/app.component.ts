import { Component } from '@angular/core';

@Component({
  selector: 'b-root',
  template: `
  <router-outlet></router-outlet>
`,

  styles: []
})
export class AppComponent {
  title = 'blog';
}
