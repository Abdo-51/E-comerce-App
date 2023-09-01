import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProducListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkoutForm!: FormGroup
  count:number =0
  totalPrice:number =0
  constructor(private fb:FormBuilder,private _ProductService: ProducListService)
  {
    this.checkoutForm =this.fb.group({
      ['fName']:['',[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]],
      ['lName']:['',[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]],
      ['street']:['',[Validators.required]],
      ['city']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      ['state']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      ['zip']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      ['credit']:['',[Validators.required,Validators.pattern(/[0-9]{14}$/)]],
      ['exp']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
      ['ccv']:['',[Validators.required,Validators.minLength(1),Validators.maxLength(4)]],

    })

    this._ProductService.productsCarts.subscribe((products:any)=>{

      this.totalPrice=0
      this.count=0
      for (const key in products) {
        this.count+= products[key]?.count
       this.totalPrice+= products[key]?.count * products[key].product.price
      }
    })
  }

  checkout()
  {
    this._ProductService.checkout()
  }
}
