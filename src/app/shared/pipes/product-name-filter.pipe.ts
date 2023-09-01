import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Pipe({
  name: 'productNameFilter'
})
export class ProductNameFilterPipe implements PipeTransform {

  transform(productList: IProduct[]|[], term: string): IProduct[]|[] {
    if(term == '-1') {
      return productList;
      }
      return productList.filter(function(product) {
        return product.category.toLowerCase().includes(term.toLowerCase())
      })

  }

}
