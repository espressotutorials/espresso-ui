import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFooterComponent } from './card-footer.component';



@NgModule({
  declarations: [CardFooterComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardFooterComponent
  ]
})
export class CardFooterModule { }
