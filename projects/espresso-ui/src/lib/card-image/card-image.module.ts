import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageComponent } from './card-image.component';



@NgModule({
  declarations: [CardImageComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardImageComponent
  ]
})
export class CardImageModule { }
