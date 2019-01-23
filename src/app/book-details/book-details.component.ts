import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from './../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bs: BookStoreService, private route: ActivatedRoute) {}

  ngOnInit() {
    const params = this.route.snapshot.params; // read url params
    this.bs.getSingle(params['isbn']).subscribe(b => (this.book = b));
  }

  getRating(num: number) {
    return new Array(num);
  }
}
