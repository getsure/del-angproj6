import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [CommonModule, RouterModule],
  standalone:true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books:any[] = []
  constructor(private bookService:BookService){}
  ngOnInit(){
    this.books = this.bookService.getBooks()
    console.log(".......",this.books)
  }
}
