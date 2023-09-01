import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IProduct } from '../shared/interfaces/IProduct';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProducListService {
  serverUrl: string = environment.baseUrl;
  productsCarts =new BehaviorSubject<any>({})
  userEmail: string = ''
  constructor(private _http: HttpClient,private _AuthService: AuthService) {

    this._AuthService.LoggedInfo.subscribe((data)=>{

      this.userEmail=data.email
      this.productsCarts.next(JSON.parse(localStorage.getItem(this.userEmail+'user')||"{}"))
    })
  }
  getAllProducts(): Observable<any> {
    return this._http.get(`${this.serverUrl}`);
  }
  addProductToCart(product: IProduct)
  {
    if (this.productsCarts.value[product.id]) {
      this.productsCarts.value[product.id].count++
      this.productsCarts.next({...this.productsCarts.value})
    }
    else
    {
      this.productsCarts.value[product.id]={count:1,product:product}
      this.productsCarts.next({...this.productsCarts.value})
    }
    localStorage.setItem(this.userEmail+'user',JSON.stringify(this.productsCarts.value))
  }

  removeProductFromCart(productId: number)
  {
      delete this.productsCarts.value[productId]
      this.productsCarts.next({...this.productsCarts.value})

    localStorage.setItem(this.userEmail+'user',JSON.stringify(this.productsCarts.value))
  }

  incrementProduct(productId: number)
  {
    this.productsCarts.value[productId].count++
    this.productsCarts.next({...this.productsCarts.value})
    localStorage.setItem(this.userEmail+'user',JSON.stringify(this.productsCarts.value))
  }

  decrementProduct(productId:number)
  {
    if (this.productsCarts.value[productId].count > 1) {
    this.productsCarts.value[productId].count --
    }
    else
    {
      delete this.productsCarts.value[productId]
    }
    this.productsCarts.next({...this.productsCarts.value})
    localStorage.setItem(this.userEmail+'user',JSON.stringify(this.productsCarts.value))
  }

  checkout()
  {
    localStorage.removeItem(this.userEmail+'user')
    this.productsCarts.next({})
  }

}
