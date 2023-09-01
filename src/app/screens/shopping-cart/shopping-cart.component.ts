import { Component } from '@angular/core';
import { ProducListService } from 'src/app/services/product-list.service';
import { IProduct } from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  productsSelected:any[]=[]
  totalPrice:number =0
  constructor(private _ProductService: ProducListService)
  {
    this._ProductService.productsCarts.subscribe((products:any)=>{
      this.productsSelected =products
      this.totalPrice=0
      for (const key in products) {
       this.totalPrice+= products[key]?.count * products[key].product.price

      }
    })
  }

  removeProduct(productId:number)
  {
    this._ProductService.removeProductFromCart(productId)
  }

  increment(productId:number)
  {
    this._ProductService.incrementProduct(productId)
  }
  decrement(productId:number)
  {
    this._ProductService.decrementProduct(productId)
  }

}
