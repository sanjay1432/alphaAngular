import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  public getBooks() {
    return this.getJSON();
  }
  public getJSON(): Observable<any> {
     return this.http.get('../assets/books.json');
  }

}
