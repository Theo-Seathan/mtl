import { Component } from '@angular/core';
import { ProductAdjuster } from './adjuster/adjuster-shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'icoder';
  myDirectiveValue = 'Hello Directive';
  sum = 0;
  widthValue = 100;


  // ตัวแปรช่องกรอก product
  productName = '';
  productStep = '';
  productMin = '';
  productMax = '';

  products: ProductAdjuster[] = [
    {name: 'tomoto', value: 0, step: 5, min: 0, max: 50},
    {name: 'pumpkin', value: 0, step: 10, min: 0, max: 100},
    {name: 'cucumber', value: 0, step: 1, min: 0, max: 10},
    {name: 'orange', value: 0, step: 100, min: 0, max: 1000},
    {name: 'apple', value: 0, step: 500, min: 0, max: 5000},
  ];
  displayProducts = this.products;

  // ตะกร้าสินค้า
  sumCart = 0;
  carts: ProductAdjuster[] = [];

  addCarts() {
    this.sumCart = 0;
    // this.products
    // .filter(pro => pro.value > 0)
    // .forEach(pro => {
    //   this.sumCart += pro.value;
    //   this.carts.push({...pro});
    //   pro.value = 0;
    // });

    this.products.forEach(product => {
      if (product.value > 0) {
        // this.sumCart += product.value;
        this.carts.push({...product});
        product.value = 0;
      }
    });

    // this.carts.forEach(cart => this.sumCart += cart.value);

    this.sumCart = this.carts.reduce((sum, cart) => sum + cart.value, 0);

    // for (const product of this.products) {
    //   if (product.value > 0) {
    //     this.sumCart += product.value;
    //     this.carts.push({...product});
    //     product.value = 0;
    //   }
    // }
    this.sum = 0;
  }

  addSummary(value: number) {
    this.sum += value;
  }

  subtractSummary(value: number) {
    this.sum -= value;
  }

  addProduct() {
    this.products.push({
      name: this.productName,
      value: 0,
      step: +this.productStep,
       min: +this.productMin,
        max: +this.productMax});
  }


  clearInput() {
    this.productName = '';
    this.productStep = '';
    this.productMin = '';
    this.productMax = '';
  }

  // clearInput(...elementList: HTMLInputElement[]) {
  //   for (const element of elementList) {
  //     element.value = '';
  //   }
  // }

  search(keyword: string) {
    this.displayProducts = this.products.filter(product => product.name.indexOf(keyword) !== -1);
  }
}
