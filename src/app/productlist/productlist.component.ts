import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  pageTitle:string="Product List";
  head='product-view';
  imageWidth:number=10;
  imageMargin:number=2;
  listFilter:string='search';
  showImage:boolean=false;
  
// private_listFilter: string='';
// get listFilter():string{
//   return this._listFilter;
// }
// set listFilter(value:string){
//   this._listFilter= value;
//   console.log('in setter:',value);
//   this.filteredproducts =this.performFilter(value);
// }

// filteredproducts:any[]=[];
  

  products:any[]=[
    {
      "productId":1,
      "productName":"kitkat",
      "productCode":"k123",
      "releaseDate":"july 20, 2022",
      "description":"good taste",
      "price":100,
      "starRating":5.0,
      "imageUrl":"D:\angular traning\angular\src\assets\kikat1.jpg"
    },
    {
      "productId":2,
      "productName":"diarymilk",
      "productCode":"d123",
      "releaseDate":"july 22, 2022",
      "description":"tasty cremy",
      "price":79.99,
      "starRating":4.8,
      "imageUrl":"D:\angular traning\angular\src\assets\diarymilk.jpg"
    },
    {
      "productId":3,
      "productName":"nugut",
      "productCode":"n123",
      "releaseDate":"july 24, 2022",
      "description":"cruchy one",
      "price":69.99,
      "starRating":4.6,
      "imageUrl":"D:\angular traning\angular\src\assets\nugut.jpg"
    },
    {
      "productId":4,
      "productName":"borbon",
      "productCode":"b12",
      "releaseDate":"july 26 , 2022",
      "description":"good",
      "price":.59,
      "starRating":4.4,
      "imageUrl":"D:\angular traning\angular\src\assets\borbon.jpg"
    },
    {
      "productId":5,
      "productName":"cherry",
      "productCode":"c123",
      "releaseDate":"july 28, 2022",
      "description":"good ",
      "price":42.00,
      "starRating":4.2,
      "imageUrl":"D:\angular traning\angular\src\assets\cherry.jpg"
    }
  ];

  // performFilter(filterBy:string):any[]{(
  //   filterBy =filterby.tolocalelowercase().includes(filterby));
  //   return this.products.filter(products:any)=>
  //   product.productName)
  // }

  toggleImage(): void{
    this.showImage= !this.showImage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
