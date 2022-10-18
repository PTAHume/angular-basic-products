import { Component, OnInit } from '@angular/core';
import IProduct from './IProduct';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export default class ProductListComponent implements OnInit {
  title = 'Product List';
  message = '';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
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
  ngOnInit(): void {
    this.filteredProducts = this.performFilter('');
  }
  performFilter(value: string): IProduct[] {
    return this.products.filter((product) =>
      product.productName.toLowerCase().includes(value.toLowerCase())
    );
  }
}
