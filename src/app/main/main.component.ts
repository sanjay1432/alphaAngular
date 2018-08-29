import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books: any;

  constructor( private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

}
