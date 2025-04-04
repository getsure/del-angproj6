import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book:any;
  constructor(private activatedRoute:ActivatedRoute, private bookService:BookService){}
  ngOnInit(){
    const bookId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.book = this.bookService.getBookById(bookId)
  }
}
