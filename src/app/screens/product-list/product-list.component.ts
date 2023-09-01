import { Component, OnInit } from '@angular/core';
import { ProducListService } from 'src/app/services/product-list.service';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList:IProduct[]=[]
  productCategory:any={}
  productName:string=''
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;
  constructor(private _ProducListService:ProducListService){
    this._ProducListService.getAllProducts().subscribe((res)=>{

      this.productList=res
      this.productCategory={}
      this.productList.forEach((product:any)=>{

        this.productCategory[product.category]=true
      })

    })
  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  checkProductValueSearch()
  {
    // if(this.productName == '') {
    //   return this.productList;
    //   }
    //   return this.productList.filter(function(product) {
    //     return product.category.toLowerCase().includes(this.productName.toLowerCase())
    //   })
  }

  ngOnInit(): void {

  }
}
