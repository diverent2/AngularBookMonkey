import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  books: Book[];

  getAll() {
    return this.books;
  }

  getSingle(isbn) {
    return this.books
      .find(book => book.isbn === isbn);
  }
}
