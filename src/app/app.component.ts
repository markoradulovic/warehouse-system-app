import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isScrolled = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.pageYOffset !== 0;
    });
  }

  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
