import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProducListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean=false;
  count:number=0;
  userLoggedIn=JSON.parse(localStorage.getItem('user')|| '{}')
  constructor(public _AuthService: AuthService,private _ProducListService:ProducListService)
  {
    this._ProducListService.productsCarts.subscribe((products:any)=>{
      this.count=0
      for (const key in products) {
       this.count+= products[key]?.count

      }
    })
  }
  logOut()
  {
    this._AuthService.logOut()
  }


}
