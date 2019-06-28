import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    providers: [ProductService]
})


export class ProductListComponent implements OnInit {
  constructor(private _productService: ProductService){

  }  



    imageWidth: Number = 30;
    imageMargin: Number = 5;

    filter: String = '';
    showImage: Boolean = false;
    pageTitle: String = 'Product List';
    products: IProduct[] = [];

      toggleImage(): void {
          this.showImage = !this.showImage;
      }

      onRatingClicked(message: string): void{
        this.pageTitle = `Product List: ${message}`;
      }

      ngOnInit(): void {
        this.products = this._productService.getProducts();
      }
    }
