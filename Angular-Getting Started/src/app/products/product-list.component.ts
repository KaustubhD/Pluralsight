import { Component, OnInit } from "@angular/core";
import { IProducts } from "./products";
import { ProductListService } from "./product-list.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  pageTitle: string = 'Products List';
  imageWidth: number = 50;
  Imagemargin: number = 2;
  showImage: boolean = false;
  errorMessage: String;
  _filterString: string;


  // private _productListService;
  // constructor(productService: ProductListService){
  //   this._productListService = productService;
  // }
  // -------- Same code ---------
  // constructor(private productService: ProductListService){}

  constructor(private productService: ProductListService){
    // this._filterString = 'hello'
  }
  get filterString(): string{
    return this._filterString
  }
  set filterString(val: string){
    this._filterString = val
    this.filteredProducts = this.filterString ? this.filterProds(this.filterString) : this.products
  }
  filteredProducts: IProducts[]
  products: IProducts[] = []
  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List ' + message
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
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        this.filteredProducts = this.products
      },
      err => this.errorMessage = <any>err
    )
  }
}