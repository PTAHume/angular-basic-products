import { ProductsService } from './../../api/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IProduct from './IProduct';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export default class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductsService,
    private route: Router
  ) {}
  pageTitle = 'Product Detail';
  sub!: Subscription;
  product: IProduct | undefined;

  ngOnInit(): void {
    //if pram dose not change gets the value at a given point in time
    const Id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (Id) {
      this.sub = this.service
        .getProductById(Id)
        .subscribe((res) => (this.product = res));
    }
  }
  onBack() {
    this.route.navigate(['/products']);
  }
}
