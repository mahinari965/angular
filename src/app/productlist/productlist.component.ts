import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  products:any[]=[
    {
      "productId":1,
      "productName":"kitkat",
      "productCode":"k123",
      "releaseDate":"09, 20, 2022",
      "description":"good taste",
      "price":100,
      "starRating":5.0,
      "imageUrl":"assets/kikat1.jpg"
    },
    {
      "productId":2,
      "productName":"diarymilk",
      "productCode":"d123",
      "releaseDate":"july 22, 2022",
      "description":"tasty cremy",
      "price":79.99,
      "starRating":4.8,
      "imageUrl":"assets/diarymilk.jpg"
    },
    {
      "productId":3,
      "productName":"nugut",
      "productCode":"n123",
      "releaseDate":"june 24, 2022",
      "description":"cruchy one",
      "price":69.99,
      "starRating":4.6,
      "imageUrl":"assets/nugut.jpg"
    },
    {
      "productId":4,
      "productName":"borbon",
      "productCode":"b12",
      "releaseDate":"may 26 , 2022",
      "description":"good",
      "price":23.59,
      "starRating":4.4,
      "imageUrl":"assets/borbon.jpg"
    },
    {
      "productId":5,
      "productName":"cherry",
      "productCode":"c123",
      "releaseDate":"april 28, 2022",
      "description":"good ",
      "price":42.00,
      "starRating":3.0,
      "imageUrl":"assets/cherry.jpg"
    }
  ];

  toggleImage(): void{
    this.showImage= !this.showImage;
  }


  onRatingClicked(message:string):void{
    this.pageTitle ='product List' +message;
  }
}