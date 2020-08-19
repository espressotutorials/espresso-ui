import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTimeComponent } from './card-time.component';



@NgModule({
  declarations: [CardTimeComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardTimeComponent
  ]
})
export class CardTimeModule { }
