import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
    <h1>Home Sweet Home</h1>
    <p>Das ist der Bookmonkey<p>
    <a routerLink="../books" class="ui red button">
      Buchliste anzeigen  <i class="right arrow icon"></i>
    </a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
