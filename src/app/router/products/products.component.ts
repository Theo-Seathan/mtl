import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList = [
    {
      productCode: 'Example1',
      productName: 'Example1'
    },
    {
      productCode: 'Example2',
      productName: 'Example2'
    },
    {
      productCode: 'Example3',
      productName: 'Example3'
    },
    {
      productCode: 'Example4',
      productName: 'Example4'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
