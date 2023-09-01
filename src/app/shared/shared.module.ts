import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { ProductNameFilterPipe } from './pipes/product-name-filter.pipe'
@NgModule({
  declarations: [
    ProductCardComponent,
    CategoryFilterPipe,
    ProductNameFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    ProductCardComponent,
    CategoryFilterPipe,
    ProductNameFilterPipe
  ],
})
export class SharedModule { }
