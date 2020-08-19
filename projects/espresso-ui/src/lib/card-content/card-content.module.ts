import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContentComponent } from './card-content.component';



@NgModule({
  declarations: [CardContentComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardContentComponent
  ]
})
export class CardContentModule { }
