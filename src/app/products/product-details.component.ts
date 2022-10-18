import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor() {}
  pageTitle: string = '';
  ngOnInit(): void {}
}
