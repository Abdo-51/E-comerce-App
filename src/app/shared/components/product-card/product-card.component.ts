import { Component, Input } from '@angular/core';
import { ProducListService } from 'src/app/services/product-list.service';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!:IProduct
  constructor(private _ProducListService:ProducListService)
  {}
  addToCart(product:any)
  {
    this._ProducListService.addProductToCart(product)
  }
}
