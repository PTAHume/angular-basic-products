import { ProductsService } from './../../api/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import IProduct from './IProduct';
import { Subscribable, Subscription } from 'rxjs';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export default class ProductListComponent implements OnInit, OnDestroy {
  title = 'Product List';
  message = '';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage: string = '';
  service!: Subscription;

  private _listFilter = '';

  constructor(private productsService: ProductsService) {}

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  ngOnInit(): void {
    this.service = this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  ngOnDestroy(): void {
    this.service.unsubscribe();
  }

  onChange(args: number) {
    console.log(args);
  }
  toggleImage = (): void => {
    this.showImage = !this.showImage;
  };
  onRatingClick = (message: string): void => {
    this.message = message;
  };
  performFilter(value: string): IProduct[] {
    return this.products.filter((product) =>
      product.productName.toLowerCase().includes(value.toLowerCase())
    );
  }
}
