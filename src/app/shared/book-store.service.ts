import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(
      retry(3),
      map(rawBooks => rawBooks.map(rawBook => BookFactory.fromObject(rawBook))),
      catchError(this.errorHandler)
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/book/${isbn}`).pipe(
      retry(3),
      map(rawBook => BookFactory.fromObject(rawBook)),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
