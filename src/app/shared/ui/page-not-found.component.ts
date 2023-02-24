import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  template: `
    <h1 class="title">This is not the page you were looking for!</h1>
  `,
  styles: ['.title {font-size: 2rem; color: #ff285a;}'],
})
export class PageNotFoundComponent {}
