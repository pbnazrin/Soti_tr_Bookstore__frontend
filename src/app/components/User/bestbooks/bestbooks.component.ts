import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bestbooks',
  templateUrl: './bestbooks.component.html',
  styleUrls: ['./bestbooks.component.css']
})
export class BestbooksComponent implements OnInit {
  bestBooks:any[]=[];

  constructor(private bookService:BookService) {
    this.bookService.getBestBooks().subscribe((response:any)=>{
      this.bestBooks=response;
    })
   }

  ngOnInit(): void {
  }

  

}
