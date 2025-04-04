import { Routes } from '@angular/router';

export const booksRoutes:Routes = [
    {
        path:'', //localhost:4200/books
        loadComponent:() => import('./books/books.component').then((m) => m.BooksComponent)
    },
    {
        path:':id',//localhost:4200/id
        loadComponent:() => import('./book-details/book-details.component').then((m) => m.BookDetailsComponent)
    }
]