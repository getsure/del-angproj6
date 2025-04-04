import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:any[] = [
    {id:101, title:'Angular', author:'chiru'},
    {id:102, title:'React', author:'suresh'},
    {id:103, title:'NodeJS', author:'vihaan'}
  ]

  getBooks(){
    return this.books;
  }

  getBookById(id:number){
    return this.books.find(book => book.id === id)
  }

}
