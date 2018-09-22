import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from './product-list.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: IProducts | undefined
  errorMessage: ''
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductListService) {
    
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.pageTitle += ` : ${id}`
    this.product = {
        "productId": id,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack(){
    this.router.navigate(['/products'])
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe(
      prod => this.product = prod,
      error => this.errorMessage = error
    )
  }

}
