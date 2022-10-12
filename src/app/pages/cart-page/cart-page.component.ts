import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  books:any[]=[];
  userId:any;

  constructor(private cartService:CartService,private activatedRoute:ActivatedRoute) {
    this.userId =this.activatedRoute.snapshot.paramMap.get('UserId'); 

    this.cartService.getCartBookByUserId(this.userId).subscribe((response:any)=>{
      this.books=response;

    })
   }

  ngOnInit(): void {
  }
  onClickHandler(book: any) {
    console.log('delete', book);
    this.cartService
      .DeleteCartBook(this.userId, book.BookId)
      .subscribe((response: any) => {
        console.log('deletebook', response);
      });
  }

}
