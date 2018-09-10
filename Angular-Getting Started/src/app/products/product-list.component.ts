import { Component, OnInit } from "@angular/core";
import { IProducts } from "./products";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  pageTitle: string = 'Products List';
  imageWidth: number = 50;
  Imagemargin: number = 2;
  showImage: boolean = false;
  _filterString: string;
  get filterString(): string{
    return this._filterString; 
  }
  set filterString(val: string){
    this._filterString = val;
    this.filteredProducts = this._filterString ? this.filterProds(this._filterString) : this.products;
  }
  filteredProducts: IProducts[];
  products: IProducts[] = [
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    }
  ];
  constructor(){
    this.filteredProducts = this.products;
    this._filterString = 'hello';
  }
  filterProds(val: string): IProducts[]{
    val = val.toLocaleLowerCase()
    return this.products.filter((prod: IProducts) => prod.productName.toLocaleLowerCase().indexOf(val) !== -1)
  }
  toggleImage(): void{
    this.showImage = !this.showImage
  }
  ngOnInit(): void{
    console.log('Init done')
  }
}