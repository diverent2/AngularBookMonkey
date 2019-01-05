import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
    <h1>Home Sweet Home</h1>
    <p>Das ist der Bookmonkey<p>
    <button>Buchliste anzeigen</button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
